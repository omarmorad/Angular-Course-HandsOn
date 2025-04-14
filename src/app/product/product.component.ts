import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [
   {
    image:'assets/images/product1.jpg',
    productName:'product 1',
    productPrice:'100',
    onSale:true,
   } ,
   {
    image:'assets/images/product2.jpg',
    productName:'product 2',
    productPrice:'200',
    onSale:false,
   },
   {
    image:'assets/images/product3.jpg',
    productName:'product 3',
    productPrice:'300',
    onSale:true,
   },
  ]
}
