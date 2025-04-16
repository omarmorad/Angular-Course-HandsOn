import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-categories',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-categories.component.html'
})
export class ProductCategoriesComponent implements OnInit {
  categories: string[] = [];
  selectedCategory: string | null = null;
  categoryProducts: Product[] = [];
  allProducts$!: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.allProducts$ = this.productService.getAllProducts();
  }

  ngOnInit(): void {
    
    this.categories = this.productService.getCategories();
    if (this.categories.length > 0) {
      this.selectCategory(this.categories[0]);
    }
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.categoryProducts = this.productService.getProductsByCategory(category);
  }
}
