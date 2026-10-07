import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralService } from '../general.service';
import {
  TechStackItem,
  HightlightBadge,
  NavLink,
  DriveCard,
  TechIcon,
  QuickStat,
  TechBadge,
  ExperienceItem,
  StatCard,
  Highlight,
  Tag,
  Project,
  FilterKey,
  HighlightKeyItem,
  ConnectItem,
} from '../general.modal';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly theme = inject(GeneralService);

  protected readonly highlightbadges: HightlightBadge[] = [
    { icon: '⚡', label: 'Clean Code' },
    { icon: '🛡️', label: 'Scalable' },
    { icon: '🚀', label: 'Performance' },
  ];

  protected readonly techStack: TechStackItem[] = [
    {
      name: 'Angular',
      description: 'Building dynamic and scalable single page applications.',
      colorClass: 'angular',
      image: '/angular.png',
    },
    {
      name: 'React',
      description: 'Creating interactive and component-based user interfaces.',
      colorClass: 'react',
      image: '/react.png',
    },
    {
      name: 'Node.js',
      description: 'Building scalable network applications and backend services.',
      colorClass: 'nodejs',
      image: '/nodejs.png',
    },
  ];

  readonly infoRow = signal([
    { label: 'Location', value: 'Nigeria', icon: 'pin' as const },
    { label: 'Experience', value: '3+ Years', icon: 'calendar' as const },
    { label: 'Email', value: 'danieldamilola020@gmail.com', icon: 'mail' as const },
  ]);

  readonly driveCards = signal<DriveCard[]>([
    {
      title: 'Problem Solver',
      description: 'I enjoy solving complex problems and crafting simple, effective solutions.',
      accent: 'blue',
      icon: 'rocket',
    },
    {
      title: 'Clean & Scalable Code',
      description:
        'I follow best practices to build maintainable and performance-driven applications.',
      accent: 'red',
      icon: 'code',
    },
    {
      title: 'Continuous Learner',
      description: "I'm always exploring new technologies to stay sharp and build better.",
      accent: 'yellow',
      icon: 'book',
    },
  ]);

  readonly techIcons = signal<TechIcon[]>([
    { name: 'Angular', icon: 'angular' },
    { name: 'React', icon: 'react' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'Git', icon: 'git' },
  ]);

  readonly quickStats = signal<QuickStat[]>([
    { value: '8+', label: 'Projects Built', icon: 'code' },
    { value: '8+', label: 'Happy Clients', icon: 'clients' },
    { value: '1000+', label: 'Hours Coded', icon: 'coffee' },
    { value: '3+', label: 'Years Experience', icon: 'rocket' },
  ]);

  readonly codeSnippet = signal({
    name: 'Fullstack Engineer',
    focus: ['Frontend', 'Backend', 'DevOps'],
    passion: 'Building products that solve real problems',
    alwaysLearning: true,
  });

  readonly isLightTheme = signal(false);

  readonly stats = signal<StatCard[]>([
    {
      id: 1,
      iconType: 'briefcase',
      value: '3+',
      label: 'Years Experience',
      colorVar: '--accent-green',
    },
    {
      id: 2,
      iconType: 'calendar',
      value: '8+',
      label: 'Projects Completed',
      colorVar: '--accent-blue',
    },
    {
      id: 3,
      iconType: 'users',
      value: '2+',
      label: 'Companies Worked',
      colorVar: '--accent-yellow',
    },
  ]);

  //experience

  readonly experiences = signal<ExperienceItem[]>([
    {
      id: 1,
      iconType: 'angular',
      role: ' Fullstack Developer',
      company: 'Olohie Virtual (Freelance)',
      dateRange: 'Jan 2024 - Present',
      badgeLabel: 'Present',
      badgeVariant: 'present',
      description:
        'Architected Angular apps cutting bundle size 38%, load time 2.1s, and form errors 35%, while hitting 95+ Lighthouse scores and 82% test coverage.',
      tech: [
        { name: 'Angular', variant: 'angular' },
        { name: 'React', variant: 'react' },
        { name: 'Node.js', variant: 'nodejs' },
      ],
    },
    {
      id: 2,
      iconType: 'react',
      role: 'Front-End Developer',
      company: 'Samsky Pay UK (Contract)',
      dateRange: 'Aug 2023 - Dec 2024',
      badgeLabel: '1.5 yrs',
      badgeVariant: 'duration-blue',
      description:
        'Developed and maintained web applications using Angular, React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality solutions.',
      tech: [
        { name: 'Angular', variant: 'angular' },
        { name: 'React', variant: 'react' },
        { name: 'Node.js', variant: 'nodejs' },
      ],
    },
  ]);

  readonly highlights = signal<Highlight[]>([
    {
      id: 1,
      iconType: 'trending',
      title: 'Continuous Growth',
      description: 'Always learning new technologies and improving my skills.',
      colorVar: '--accent-green',
    },
    {
      id: 2,
      iconType: 'team',
      title: 'Team Collaboration',
      description: 'Strong believer in teamwork and open communication.',
      colorVar: '--accent-blue',
    },
    {
      id: 3,
      iconType: 'rocket',
      title: 'Impact Driven',
      description: 'Focused on building solutions that make a real difference.',
      colorVar: '--accent-yellow',
    },
  ]);

  onDownloadResume(): void {
    const link = document.createElement('a');
    link.href = new URL('Daniel_Damilola_Joseph_fullstack_tightened.docx', document.baseURI).href; // public/doj.docx is served from the app root
    link.download = 'Daniel_Damilola_Joseph_fullstack.docx';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // projects
  protected readonly filters: FilterKey[] = ['All', 'Angular', 'React', 'NodeJS', 'Other'];

  protected readonly activeFilter = signal<FilterKey>('All');

  private readonly projects: Project[] = [
    {
      name: 'Prime-Legacy',
      category: 'Angular',
      icon: 'angular',
      tags: [
        { label: 'Angular', colorVar: '--angular-color' },
        { label: 'Node.js', colorVar: '--accent-green' },
        { label: 'GitHub', colorVar: '--accent-green' },
      ],
      description: 'A Tech company that provides innovative solutions to modern problems.',
      liveDemoUrl: 'https://prime-legacy-e92jfvo52-primelegacy.vercel.app/',
      githubUrl: '#',
    },

    {
      name: 'Work-Match',
      category: 'React',
      icon: 'react',
      tags: [
        { label: 'React', colorVar: '--react-color' },
        { label: 'Node.js', colorVar: '--accent-green' },
        { label: 'GitHub', colorVar: '--accent-green' },
      ],
      description: 'A minor job seeking platform connecting job seekers with potential employers.',
      liveDemoUrl: 'https://work-match-xi.vercel.app/',
      githubUrl: '#',
    },

    {
      name: 'E-store',
      category: 'React',
      icon: 'react',
      tags: [
        { label: 'React', colorVar: '--angular-color' },
        { label: 'Node.js', colorVar: '--accent-green' },
        { label: 'GitHub', colorVar: '--accent-green' },
      ],
      description:
        'An app connecting buyers, sellers, dispatch riders and manufacturers in one app',
      liveDemoUrl:
        'https://expo.dev/accounts/dandami_117/projects/marketplace/builds/3a70af4d-65a6-441d-a09c-48f258a58192',
      githubUrl: '#',
    },

    {
      name: 'E-Commerce Store',
      category: 'Angular',
      icon: 'angular',
      tags: [
        { label: 'Angular', colorVar: '--angular-color' },
        { label: 'Node.js', colorVar: '--accent-green' },
        { label: 'GitHub', colorVar: '--accent-green' },
      ],
      description: 'A full-featured e-commerce platform with cart, checkout.',
      liveDemoUrl: 'https://joy-foodly.netlify.app/login',
      githubUrl: '#',
    },

    {
      name: 'NewsPulse',
      category: 'Angular',
      icon: 'angular',
      tags: [
        { label: 'Angular', colorVar: '--angular-color' },
        { label: 'nodejs', colorVar: '--nodejs-color' },
        { label: 'GitHub', colorVar: '--accent-green' },
      ],
      description:
        'consolidating live sports updates, stock market data, weather forecasts, and breaking news.',
      liveDemoUrl: 'https://news-updates-app.netlify.app/',
      githubUrl: '#',
    },

    {
      name: 'Enterprise Analytics Dashboard',
      category: 'Angular',
      icon: 'angular',
      tags: [
        { label: 'Angular', colorVar: '--angular-color' },
        { label: 'nodejs', colorVar: '--nodejs-color' },
        { label: 'GitHub', colorVar: '--accent-green' },
      ],
      description: ' demo built to show how decision-makers can replace static',
      liveDemoUrl: 'https://enterprise-ecru-omega.vercel.app/',
      githubUrl: '#',
    },

    {
      name: 'HealthEd — Health Education Platform ',
      category: 'React',
      icon: 'react',
      tags: [
        { label: 'React', colorVar: '--angular-color' },
        { label: 'nodejs', colorVar: '--nodejs-color' },
        { label: 'GitHub', colorVar: '--accent-green' },
      ],
      description: ' health education content, condition guides, and wellness ',
      liveDemoUrl: 'https://glittery-figolla-73e447.netlify.app/',
      githubUrl: '#',
    },

    {
      name: 'Tesla-Inspired Car Configurator',
      category: 'React',
      icon: 'react',
      tags: [
        { label: 'React', colorVar: '--angular-color' },
        { label: 'Node.js', colorVar: '--accent-green' },
        { label: 'GitHub', colorVar: '--accent-green' },
      ],
      description: ' Tesla-Inspired Car Configurator',
      liveDemoUrl: 'https://tesla-d-demo.netlify.app/',
      githubUrl: '#',
    },
  ];

  protected readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All') {
      return this.projects;
    }
    return this.projects.filter((project) => project.category === filter);
  });

  protected setFilter(filter: FilterKey): void {
    this.activeFilter.set(filter);
  }

  //Contact
  protected readonly HighlightKeyItem: HighlightKeyItem[] = [
    {
      icon: 'chat',
      accent: 'blue',
      title: "Let's Talk",
      description: "Share your ideas and goals. I'll get back to you as soon as possible.",
    },
    {
      icon: 'bolt',
      accent: 'green',
      title: 'Quick Response',
      description: 'I typically reply within 24 hours on business days.',
    },
    {
      icon: 'handshake',
      accent: 'yellow',
      title: 'Open to Opportunities',
      description:
        "Freelance projects, full-time roles, or collaborations — let's build something great.",
    },
  ];

  protected readonly connectItems: ConnectItem[] = [
    {
      icon: 'mail',
      accent: 'blue',
      label: 'Email',
      value: 'danieldamilola020@gmail.com',
      valueAccent: 'blue',
      note: 'Drop me a line anytime.',
    },
    {
      icon: 'phone',
      accent: 'green',
      label: 'Phone',
      value: '09071734982',
      valueAccent: 'green',
      note: 'Mon - Sunday, 7AM - 9PM (EST)',
    },
    {
      icon: 'whatsapp',
      accent: 'green',
      label: 'WhatsApp',
      value: 'WhatsApp (09071734982)',
      valueAccent: 'green',
      note: 'Quickest way to reach me.',
    },
    {
      icon: 'linkedin',
      accent: 'blue',
      label: 'LinkedIn',
      value: 'www.linkedin.com/in/joseph-daniel-damilola',
      valueAccent: 'blue',
      note: "Let's connect professionally.",
    },
    {
      icon: 'pin',
      accent: 'yellow',
      label: 'Location',
      value: 'Onsite/Remote Worldwide',
      valueAccent: 'yellow',
      note: 'Available across time zones.',
    },
    {
      icon: 'clock',
      accent: 'purple',
      label: 'Response Time',
      value: 'Within 24 hours',
      valueAccent: 'purple',
      note: 'On business days.',
    },
  ];
}
