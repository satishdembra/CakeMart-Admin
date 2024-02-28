import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin-dashboard-home',
  templateUrl: './admin-dashboard-home.component.html',
  styleUrls: ['./admin-dashboard-home.component.css'],
})
export class AdminDashboardHomeComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('isAuthenticated') === 'false') {
      this.router.navigate(['/admin-signin']);
    }

    Chart.defaults.backgroundColor = 'white';
    Chart.defaults.borderColor = '#36a3eb6c';
    Chart.defaults.color = '#000';

    new Chart('myChart', {
      type: 'bar',
      data: {
        labels: [
          'P1',
          'Blue',
          'Yellow',
          'Green',
          'Purple',
          'Orange',
          'Blue',
          'Yellow',
          'Green',
          'Purple',
          'Orange',
        ],
        datasets: [
          {
            label: '# of Orders',
            data: [10, 23, 13, 15, 12, 23, 23, 13, 15, 12, 23],
            borderWidth: 1,
            // borderColor: '#fff',
            borderColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
          },
        ],
      },

      options: {
        layout: {
          padding: {
            left: 10,
            // bottom: 5,
            // top: 5,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    new Chart('myPieChart', {
      type: 'doughnut',
      data: {
        labels: ['P1', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
          {
            label: '# of Orders',
            data: [10, 23, 13, 15, 12, 23],
            borderWidth: 1,
            // borderColor: '#fff',
            borderColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
          },
        ],
      },

      options: {
        layout: {
          padding: {
            left: 10,
            // bottom: 5,
            // top: 5,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  logout() {
    localStorage.setItem('isAuthenticated', 'false');
    this.router.navigate(['/admin-signin']);
  }
}
