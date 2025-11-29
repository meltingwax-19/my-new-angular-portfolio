import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
  imports: [CommonModule],
})
export class ResumeComponent {
  intro = 'A quick snapshot of my experience, education, and key skills as a frontend developer in training.';

  // SUMMARY
  summaryName = 'Gad Enwe';
  summaryRole = 'Frontend developer (in training) focused on building clean, responsive websites and web applications.';
  summaryPoints: string[] = [
    'Based in Nigeria and open to remote opportunities.',
    'Interested in web, cloud and security.',
    'Practising daily through projects and bootcamps.',
  ];

  // EXPERIENCE
  experienceTitle = 'Practice & Portfolio Projects';
  experienceMeta = 'Self-directed · 2023 – Present';
  experiencePoints: string[] = [
    'Responsive layouts using Flexbox and Grid.',
    'Navigation menus, hero sections and cards.',
    'Basic JavaScript interactivity.',
  ];

  // EDUCATION
  educationTitle = 'Frontend / Full-stack Training';
  educationMeta = 'Online Courses & Bootcamps · 2023 – Present';
  educationBody =
    'Studying HTML, CSS, responsive design, JavaScript and Angular, with a focus on real-world projects and version control (Git/GitHub).';

  // SKILLS
  skillsTitle = 'Core Skill Set';
  skillsRows = [
    { label: 'Core', value: 'HTML, CSS, basic JavaScript' },
    { label: 'Layout', value: 'Flexbox, CSS Grid, responsive design' },
    { label: 'Tools', value: 'Git, GitHub, VS Code, Chrome DevTools' },
    { label: 'Frameworks', value: 'Angular (beginner level)' },
  ];
}
