import { Component, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminLoginService } from '../admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
  loginForm = new FormGroup({
    customer_email: new FormControl(null, Validators.required),
    customer_password: new FormControl(null, Validators.required),
  });

  get customer_email() {
    return this.loginForm.get('customer_email');
  }

  get customer_password() {
    return this.loginForm.get('customer_password');
  }

  constructor(
    private adminLoginService: AdminLoginService,
    private router: Router,
    private renderer: Renderer2
  ) {}
  ngOnInit() {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      this.router.navigate(['/admin-dashboard']);
    }
  }
  loginUser() {
    // calling service to call authUser api
    this.adminLoginService.authUser(this.loginForm.value).subscribe({
      next: (data) => {
        // console.log('data is --------- ' + data.mssg);

        if (data.status === 'success') {
          localStorage.setItem('isAuthenticated', 'true');
          console.log(
            '-----------------**************** ',
            localStorage.getItem('isAuthenticated')
          );
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.displayAlert(data.mssg);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });

    console.log('-------------------- loginForm - ', this.loginForm.value);
  }
  displayAlert(message: string, duration: number = 3000) {
    // Create the alert element
    const alertElement = this.renderer.createElement('div');
    this.renderer.addClass(alertElement, 'alert');
    this.renderer.addClass(alertElement, 'alert-danger');
    this.renderer.addClass(alertElement, 'fade');
    this.renderer.setAttribute(alertElement, 'role', 'alert');
    const textNode = this.renderer.createText(message);
    this.renderer.appendChild(alertElement, textNode);

    // Append the alert element to the DOM
    const containerElement = document.getElementById('alert-container'); // Replace 'alert-container' with the ID of the element where you want to display the alert
    this.renderer.appendChild(containerElement, alertElement);

    // Automatically remove the alert after the specified duration
    setTimeout(() => {
      this.renderer.addClass(alertElement, 'show');
      setTimeout(() => {
        this.renderer.removeClass(alertElement, 'show');
        setTimeout(() => {
          this.renderer.removeChild(containerElement, alertElement);
        }, 500); // Adjust this duration to match the fade out animation duration in CSS
      }, duration - 1000); // Subtract the fade out animation duration from the total duration
    }, 50); // Add a slight delay before showing the alert to ensure the fade in animation works properly
  }
}
