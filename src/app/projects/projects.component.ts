import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
    projects: Project[] = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.',
            image: 'assets/project1.jpg', // Placeholder, user can replace
            link: '#',
            tags: ['Angular', 'Node.js', 'MongoDB', 'Stripe']
        },
        {
            title: 'Task Management App',
            description: 'A collaborative task management tool featuring drag-and-drop boards, real-time updates, and team analytics.',
            image: 'assets/project2.jpg', // Placeholder
            link: '#',
            tags: ['React', 'Firebase', 'Tailwind CSS']
        },
        {
            title: 'Weather Dashboard',
            description: 'A beautiful weather dashboard providing detailed forecasts, interactive maps, and severe weather alerts.',
            image: 'assets/project3.jpg', // Placeholder
            link: '#',
            tags: ['Vue.js', 'OpenWeatherMap API', 'Chart.js']
        }
    ];
}
