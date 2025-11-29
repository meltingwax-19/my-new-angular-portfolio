import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  // Used in the image alt text
  name = 'Gad Enwe';

  // Section heading
  title = 'About';

  // Main paragraphs
  lead =
    'Digital product enthusiast and frontend developer in training, focused on turning clean, modern layouts into responsive, accessible websites.';

  bodyOne =
    'I’m currently sharpening my skills in HTML, CSS, JavaScript and Angular through projects, bootcamps and daily practice.';

  bodyTwo =
    'My goal is to build interfaces that feel clear, fast and easy to use.';

  // Bullet highlights
  highlightOne = 'Based in Nigeria and open to remote opportunities.';
  highlightTwo = 'Interested in web, cloud and security.';
  highlightThree =
    'Learning through real projects, code reviews and teamwork.';
}
