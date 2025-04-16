import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, CategoryComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  recommendedProducts = [
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
      onSale:true,
    }
  ];
}
