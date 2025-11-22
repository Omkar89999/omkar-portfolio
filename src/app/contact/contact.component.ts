import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email = environment.email;
  social = environment.social;

  name: string = '';
  senderEmail: string = '';
  message: string = '';

  onSubmit() {
    const subject = `Portfolio Contact from ${this.name}`;
    const body = `Name: ${this.name}%0D%0AEmail: ${this.senderEmail}%0D%0A%0D%0AMessage:%0D%0A${this.message}`;
    window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;
  }
}
