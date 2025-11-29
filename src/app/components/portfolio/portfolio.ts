import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface PortfolioItem {
  image: string;
  alt: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss'],
})
export class PortfolioComponent {
  title = 'Portfolio';
  intro = 'A few example projects that represent the kind of work I do.';

  items: PortfolioItem[] = [
    {
      image: 'assets/img/portfolio/app-1.jpg',
      alt: 'App project',
      title: 'App Projects',
      description:
        'Mobile app interfaces designed with clean layouts, intuitive user flows, and a strong focus on real-world usability.',
    },
    {
      image: 'assets/img/portfolio/dashboard.jpg',
      alt: 'Dashboard UI project',
      title: 'Dashboard UI',
      description:
        'Clean dashboard layout with reusable components and responsive tables for viewing data.',
    },
    {
      image: 'assets/img/portfolio/website-1.jpg',
      alt: 'Multi-page website project',
      title: 'Multi-page Website',
      description:
        'Small business site with multiple pages, consistent typography and a simple content structure.',
    },
  ];
}
