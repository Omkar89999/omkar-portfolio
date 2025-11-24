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
    professionalProjects: Project[] = [
        {
            title: 'Broadside',
            description: 'An SMS and email sender product developed for the company.',
            image: 'assets/broadside.png',
            link: '#',
            tags: ['Product Development', 'Communication']
        },
        {
            title: 'AURY',
            description: 'Worked as a Java Backend Developer on this product.',
            image: 'assets/aury.png',
            link: '#',
            tags: ['Java', 'Backend', 'Product Development']
        },
        {
            title: 'Broadside DC Generated',
            description: 'A webpage generated using Angular for Broadside DC.',
            image: 'assets/broadside-dc.png',
            link: '#',
            tags: ['Angular', 'Frontend', 'Web Development']
        }
    ];

    personalProjects: Project[] = [
        {
            title: 'Blog App APIs',
            description: 'A purely backend API project for a blog application built using Java and Spring Boot.',
            image: 'assets/blog-api.png',
            link: '#',
            tags: ['Java', 'Spring Boot', 'Backend', 'API']
        },
        {
            title: 'Electronic Store (Java)',
            description: 'An electronic store management system backend built using Java and Spring Boot.',
            image: 'assets/estore-java.png',
            link: 'https://github.com/Omkar89999/Electronic-Store',
            tags: ['Java', 'Spring Boot', 'Backend']
        },
        {
            title: 'Electronic Store (Go)',
            description: 'An electronic store management system backend built using Go and Gin framework.',
            image: 'assets/estore-go.png',
            link: 'https://github.com/Omkar89999/ecom-go-project',
            tags: ['Go', 'Gin', 'Backend']
        }
    ];
}
