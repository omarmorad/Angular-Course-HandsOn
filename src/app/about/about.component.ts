import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  companyInfo = {
    name: 'ITI Store',
    founded: 2024,
    mission: 'Providing quality products at affordable prices'
  };
}
