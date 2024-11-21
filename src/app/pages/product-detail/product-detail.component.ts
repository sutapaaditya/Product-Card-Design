import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="product-detail" *ngIf="product">
      <div class="product-image">
        <img [src]="product.imageUrl" [alt]="product.name">
      </div>
      <div class="product-info">
        <h1>{{ product.name }}</h1>
        <p class="price">{{ product.price | currency }}</p>
        <p class="category">{{ product.category }}</p>
        <p class="description">{{ product.description }}</p>
        <button class="add-to-cart">Add to Cart</button>
        <a routerLink="/" class="back-link">Back to Products</a>
      </div>
    </div>
  `,
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      this.product = this.productService.getProduct(id);
    });
  }
}
