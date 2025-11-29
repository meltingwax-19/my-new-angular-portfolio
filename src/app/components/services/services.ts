import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.scss',
  imports: [CommonModule],
})
export class ServicesComponent {
  intro =
    'Here are some of the ways I can help you with your next project.';

  services = [
    {
      icon: 'bi-code-slash',
      title: 'Frontend Development',
      body:
        'Building clean, responsive websites using modern HTML, CSS and JavaScript so your site looks good on any device.',
    },
    {
      icon: 'bi-phone',
      title: 'Responsive Design',
      body:
        'Making sure layouts, typography and components adapt smoothly from mobile screens up to large desktops.',
    },
    {
      icon: 'bi-speedometer2',
      title: 'Performance & Cleanup',
      body:
        'Improving existing pages by tidying markup, optimizing assets and focusing on faster load times.',
    },
  ];
}
