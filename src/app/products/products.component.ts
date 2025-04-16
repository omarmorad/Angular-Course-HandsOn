import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <div class="container my-4">
      <h2>All Products</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        @for (product of products$ | async; track product.id) {
          <div class="col d-flex align-items-stretch">
            <app-product-card [product]="product" class="w-100"></app-product-card>
          </div>
        } @empty {
          <p class="text-muted">No products available.</p>
        }
      </div>
    </div>
  `
})
export class ProductsComponent {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAllProducts();
  }
}
