import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = {
    address: '123 Store Street, Mansoura, Egypt',
    email: 'contact@itistore.com',
    phone: '+20 123 456 7890',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM'
  };
}
