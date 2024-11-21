import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  additionalImages?: string[];
  specifications?: { [key: string]: string };
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: '1',
      name: 'Classic Birthday Card',
      description: 'A timeless birthday card design with elegant floral patterns and gold foil accents.',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3',
      additionalImages: [
        'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3'
      ],
      specifications: {
        'Dimensions': '5x7 inches',
        'Paper Type': 'Premium Matte',
        'Style': 'Floral',
        'Occasion': 'Birthday'
      }
    },
    {
      id: '2',
      name: 'Wedding Congratulations',
      description: 'Luxurious wedding card with embossed details and pearl finish.',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3',
      specifications: {
        'Dimensions': '6x8 inches',
        'Paper Type': 'Pearl Finish',
        'Style': 'Elegant',
        'Occasion': 'Wedding'
      }
    },
    {
      id: '3',
      name: 'Thank You Card Set',
      description: 'Set of minimalist thank you cards with modern typography.',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3',
      specifications: {
        'Dimensions': '4x6 inches',
        'Paper Type': 'Recycled Matte',
        'Style': 'Minimalist',
        'Quantity': '5 cards'
      }
    },
    {
      id: '4',
      name: 'Holiday Greetings',
      description: 'Festive holiday card with winter scenes and silver accents.',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1511970093628-4e9f59378b4d?ixlib=rb-4.0.3',
      specifications: {
        'Dimensions': '5x7 inches',
        'Paper Type': 'Gloss Finish',
        'Style': 'Traditional',
        'Occasion': 'Christmas'
      }
    },
    {
      id: '5',
      name: 'Anniversary Love',
      description: 'Romantic anniversary card with heart designs and red foil details.',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1518542331925-4e91e9aa0074?ixlib=rb-4.0.3',
      specifications: {
        'Dimensions': '5x7 inches',
        'Paper Type': 'Premium Gloss',
        'Style': 'Romantic',
        'Occasion': 'Anniversary'
      }
    },
    {
      id: '6',
      name: 'New Baby Celebration',
      description: 'Sweet and gentle new baby card with cute animal illustrations.',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3',
      specifications: {
        'Dimensions': '5x7 inches',
        'Paper Type': 'Soft Touch',
        'Style': 'Cute',
        'Occasion': 'Baby'
      }
    }
  ];

  constructor() { }

  async getAllProducts(): Promise<Product[]> {
    return Promise.resolve(this.products);
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return Promise.resolve(this.products.find(product => product.id === id));
  }

  async getRelatedProducts(currentProductId: string): Promise<Product[]> {
    return Promise.resolve(
      this.products
        .filter(product => product.id !== currentProductId)
        .slice(0, 3)
    );
  }
}
