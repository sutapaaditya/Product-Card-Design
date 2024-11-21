import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imageCache = new Map<string, string>();
  private loadingImages = new Map<string, BehaviorSubject<boolean>>();

  constructor() {}

  preloadImage(src: string): Promise<string> {
    // If image is already cached, return it immediately
    if (this.imageCache.has(src)) {
      return Promise.resolve(src);
    }

    // If image is already loading, return existing promise
    if (this.loadingImages.has(src)) {
      return new Promise((resolve) => {
        const loading = this.loadingImages.get(src);
        loading?.subscribe((isLoading) => {
          if (!isLoading) {
            resolve(src);
          }
        });
      });
    }

    // Create new loading subject
    const loading = new BehaviorSubject<boolean>(true);
    this.loadingImages.set(src, loading);

    // Create and return new promise
    return new Promise((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        this.imageCache.set(src, src);
        loading.next(false);
        loading.complete();
        this.loadingImages.delete(src);
        resolve(src);
      };

      img.onerror = () => {
        loading.error('Failed to load image');
        loading.complete();
        this.loadingImages.delete(src);
        reject('Failed to load image');
      };

      img.src = src;
    });
  }

  getImagePath(path: string): string {
    return path.startsWith('assets/') ? path : `assets/images/${path}`;
  }
}
