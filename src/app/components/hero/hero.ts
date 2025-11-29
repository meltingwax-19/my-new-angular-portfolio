import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  // Text content
  name = 'Gad Enwe';
  heroLine = '';
  tagline =
    'I design and build modern, responsive websites and web applications.';

  // Call-to-action buttons
  primaryCtaLabel = 'View Portfolio';
  primaryCtaTarget = '#portfolio';

  secondaryCtaLabel = 'Contact Me';
  secondaryCtaTarget = '#contact';

  // Hero image
  heroImageSrc = 'assets/img/profile/Hero-1.png';
  heroImageAlt = 'Professional portrait of Gad Enwe';
}
