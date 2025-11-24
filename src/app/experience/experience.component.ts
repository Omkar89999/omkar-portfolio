import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Product Developer',
      company: 'Broadside',
      period: 'Present',
      description: 'Working on Broadside, an SMS and email sender product. Responsible for developing core features and ensuring reliable communication delivery.',
      technologies: ['Product Development', 'Communication Protocols']
    },
    {
      role: 'Java Backend Developer',
      company: 'AURY',
      period: 'Past',
      description: 'Worked as a Java Backend Developer, contributing to the server-side logic and API development of the AURY product.',
      technologies: ['Java', 'Backend', 'API Development']
    },
    {
      role: 'Frontend Developer',
      company: 'Broadside DC',
      period: 'Past',
      description: 'Created the Broadside DC generated webpage using Angular, focusing on responsive design and user interface implementation.',
      technologies: ['Angular', 'Frontend', 'Web Development']
    }
  ];
}
