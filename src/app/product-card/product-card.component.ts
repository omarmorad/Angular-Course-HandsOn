import { Component, Input } from '@angular/core'; // Import Component and Input
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Product } from '../interfaces/product';

@Component({ // Decorator is now recognized
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product; // Input decorator is now recognized
}
