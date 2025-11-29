import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  // Section heading
  title = 'Contact';
  intro = 'Have a project in mind or want to say hello? Feel free to reach out.';

  // Left info block
  blockHeading = 'Get in touch';
  blockText =
    "I'm open to small projects, collaborations and opportunities to grow as a frontend developer.";

  emailLabel = 'Email';
  email = 'gad.enwe.dev@gmail.com';

  locationLabel = 'Location';
  location = 'Lagos, Nigeria';

  // Form labels & placeholders
  formNameLabel = 'Name';
  formEmailLabel = 'Email';
  formMessageLabel = 'Message';

  formNamePlaceholder = 'Your name';
  formEmailPlaceholder = 'you@example.com';
  formMessagePlaceholder = 'How can I help?';

  submitLabel = 'Send Message';
}
