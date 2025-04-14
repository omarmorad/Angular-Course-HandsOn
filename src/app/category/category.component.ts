import { Component } from '@angular/core';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories = [
    {
      categoryName: 'Electronics',
      image: 'assets/electronics.jpg',
      price: 299.99
    },
    {
      categoryName: 'Clothing',
      image: 'assets/clothing.jpg',
      price: 49.99
    },
    {
      categoryName: 'Home & Kitchen',
      image: 'assets/home.jpg',
      price: 99.99
    }
  ];
}
