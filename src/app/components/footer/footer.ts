import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
  readonly owner = 'Gad Enwe'; // change if you want a different name
}
