import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  selectedImage: string = '';
  quantity: number = 1;
  imagesLoaded = false;
  relatedProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadProduct(id);
      this.loadRelatedProducts(id);
    });
  }

  private async loadProduct(id: string) {
    const product = await this.productService.getProductById(id);
    if (product) {
      this.product = product;
      this.selectedImage = product.image;
      await this.preloadImages();
    }
  }

  private async loadRelatedProducts(currentId: string) {
    this.relatedProducts = await this.productService.getRelatedProducts(currentId);
  }

  private async preloadImages() {
    if (!this.product) return;

    const imagesToLoad = [
      this.product.image,
      ...(this.product.additionalImages || [])
    ];

    try {
      await Promise.all(
        imagesToLoad.map(img => this.imageService.preloadImage(img))
      );
      this.imagesLoaded = true;
    } catch (error) {
      console.error('Error preloading images:', error);
    }
  }

  setSelectedImage(image: string) {
    this.selectedImage = image;
  }

  updateQuantity(change: number) {
    const newQuantity = this.quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      this.quantity = newQuantity;
    }
  }

  getSpecificationsList(product: Product): { label: string; value: string }[] {
    if (!product.specifications) return [];
    return Object.entries(product.specifications).map(([label, value]) => ({
      label,
      value
    }));
  }

  addToCart() {
    // TODO: Implement cart functionality
    console.log('Adding to cart:', {
      product: this.product,
      quantity: this.quantity
    });
  }
}
