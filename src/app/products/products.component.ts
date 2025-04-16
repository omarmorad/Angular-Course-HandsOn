import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      image:'assets/images/product1.jpg',
      productName:'product 1',
      productPrice:'100',
      onSale:true,
    },
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
    }
  ];
}
