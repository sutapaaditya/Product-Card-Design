import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="contact-container">
      <section class="hero">
        <h1>Contact Us</h1>
        <p>We'd Love to Hear From You</p>
      </section>
      
      <section class="content">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Get in Touch</h2>
            <div class="info-item">
              <i class="icon">📍</i>
              <div>
                <h3>Visit Us</h3>
                <p>123 Card Street</p>
                <p>Design District</p>
                <p>Creative City, CC 12345</p>
              </div>
            </div>
            <div class="info-item">
              <i class="icon">📞</i>
              <div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div class="info-item">
              <i class="icon">📧</i>
              <div>
                <h3>Email Us</h3>
                <p>support&#64;cardshop.com</p>
                <p>sales&#64;cardshop.com</p>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <h2>Send Us a Message</h2>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  formControlName="name" 
                  placeholder="Enter your full name"
                >
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  formControlName="email" 
                  placeholder="Enter your email address"
                >
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  formControlName="subject" 
                  placeholder="What is this regarding?"
                >
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  formControlName="message" 
                  rows="5" 
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button type="submit" [disabled]="!contactForm.valid">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Here you would typically send the form data to a backend service
      alert('Thank you for your message! We will get back to you soon.');
      this.contactForm.reset();
    }
  }
}
