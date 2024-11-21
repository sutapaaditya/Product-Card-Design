import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  error: string | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  async loadProducts() {
    try {
      this.loading = true;
      this.error = null;
      this.products = await this.productService.getAllProducts();
    } catch (err) {
      this.error = 'Failed to load products. Please try again later.';
      console.error('Error loading products:', err);
    } finally {
      this.loading = false;
    }
  }

  trackProductById(index: number, product: Product): string {
    return product.id;
  }
}
