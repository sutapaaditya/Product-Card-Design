import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Card Shop</h3>
          <p>Crafting elegant designs for life's special moments. Our premium cards are designed to make every occasion memorable.</p>
          <div class="social-links">
            <a href="#" class="social-link">📱</a>
            <a href="#" class="social-link">📘</a>
            <a href="#" class="social-link">📸</a>
            <a href="#" class="social-link">🐦</a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/about">About Us</a></li>
            <li><a routerLink="/contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><a href="#">Premium Cards</a></li>
            <li><a href="#">Modern Collection</a></li>
            <li><a href="#">Classic Designs</a></li>
            <li><a href="#">Luxury Series</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contact Info</h4>
          <ul class="contact-info">
            <li>
              <span class="icon">📍</span>
              123 Card Street, Design District
            </li>
            <li>
              <span class="icon">📞</span>
              +1 (555) 123-4567
            </li>
            <li>
              <span class="icon">📧</span>
              info&#64;cardshop.com
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 Card Shop. All rights reserved.</p>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}
