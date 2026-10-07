import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Badge,
  InfoItem,
  SkillCard,
  ExperienceKeyItem,
  ProjectItem,
  ContactItem,
  SocialLink,
} from '../general.modal';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume implements OnInit, OnDestroy {
  badges: Badge[] = [
    { icon: 'bolt', label: 'Clean Code' },
    { icon: 'shield', label: 'Scalable' },
    { icon: 'rocket', label: 'Performance' },
  ];

  infoItems: InfoItem[] = [
    { icon: 'briefcase', label: 'Experience', value: '3+ Years' },
    { icon: 'mail', label: 'Email', value: 'danieldamilola020@gmail.com' },
    { icon: 'pin', label: 'Location', value: 'Nigeria' },
    { icon: 'clock', label: 'Availability', value: 'Full-time / Remote' },
  ];

  skills: SkillCard[] = [
    {
      name: 'Angular',
      colorVar: '--angular-color',
      icon: 'angular',
      description: 'Building dynamic and scalable single page applications.',
      items: ['TypeScript', 'RxJS', 'NgRx', 'Angular Material'],
    },
    {
      name: 'React',
      colorVar: '--react-color',
      icon: 'react',
      description: 'Creating interactive and component-based user interfaces.',
      items: ['JavaScript (ES6+)', 'React Hooks', 'Redux / Context API', 'Material UI / Tailwind'],
    },
    {
      name: 'Node.js',
      colorVar: '--nodejs-color',
      icon: 'nodejs',
      description: 'Building scalable network applications and backend services.',
      items: ['Express.js', 'RESTful APIs', 'PostgreSQL / MongoDB', 'Docker / Redis'],
    },
  ];

  experience: ExperienceKeyItem[] = [
    {
      role: 'Fullstack Developer',
      company: 'Olohie Virtual (Freelance)',
      period: 'Jan 2024 - Present',
      description:
        'Architected Angular apps cutting bundle size 38%, load time 2.1s, and form errors 35%, while hitting 95+ Lighthouse scores and 82% test coverage.',
    },
    {
      role: 'Front-End Developer',
      company: 'Samsky Pay UK (Contract)',
      period: 'Aug 2023 - Dec 2024',
      description:
        'Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality solutions.',
    },
  ];

  projects: ProjectItem[] = [
    {
      title: 'E-Commerce Platform',
      icon: 'cart',
      description: 'Full-featured e-commerce application with Angular, Node.js and GitHub.',
      tags: [
        { label: 'Angular', color: 'angular' },
        { label: 'Node.js', color: 'node' },
        { label: 'GitHub', color: 'github' },
      ],
    },

    {
      title: 'NewsPulse',
      icon: 'check',
      description:
        'consolidating live sports updates, stock market data, weather forecasts, and breaking news.',
      tags: [
        { label: 'Angular', color: 'angular' },
        { label: 'nodejs', color: 'nodejs' },
        { label: 'GitHub', color: 'github' },
      ],
    },

    {
      title: 'Enterprise Analytics Dashboard',
      icon: 'check',
      description: 'demo built to show how decision-makers can replace static',
      tags: [
        { label: 'Angular', color: 'angular' },
        { label: 'nodejs', color: 'nodejs' },
        { label: 'GitHub', color: 'github' },
      ],
    },

    {
      title: 'HealthEd — Health Education Platform',
      icon: 'check',
      description: 'health education content, condition guides, and wellness',
      tags: [
        { label: 'react', color: 'react' },
        { label: 'nodejs', color: 'nodejs' },
        { label: 'GitHub', color: 'github' },
      ],
    },

    {
      title: 'Tesla-Inspired Car Configurator',
      icon: 'check',
      description: 'Tesla-Inspired Car Configurator',
      tags: [
        { label: 'react', color: 'react' },
        { label: 'nodejs', color: 'nodejs' },
        { label: 'GitHub', color: 'github' },
      ],
    },
  ];

  contactItems: ContactItem[] = [
    { icon: 'mail', value: 'danieldamilola020@gmail.com' },
    { icon: 'phone', value: '09071734982' },
    { icon: 'pin', value: 'Nigeria' },
  ];

  socialLinks: SocialLink[] = [
    { icon: 'linkedin', href: 'www.linkedin.com/in/joseph-daniel-damilola', label: 'LinkedIn' },
    { icon: 'github', href: 'https://github.com/Damilola1999', label: 'GitHub' },
    { icon: 'globe', href: '#', label: 'Website' },
  ];

  currentDateTime: string = new Date().toLocaleString();
  private timer?: number;

  get currentYear(): number {
    return new Date().getFullYear();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.updateDateTime();
    this.timer = window.setInterval(() => this.updateDateTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private updateDateTime(): void {
    this.currentDateTime = new Date().toLocaleString();
  }
}
