export interface AdminEditProduct {
  product_id: number;
  product_title: string;
  product_old_price: number;
  product_new_lesser_price: number;
  product_image: string;
  product_desc: string;
  product_currency: string;
}
