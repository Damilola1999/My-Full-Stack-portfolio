import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralService } from '../general.service';
import { TechStackItem, HightlightBadge } from '../general.modal';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
  fragment?: string;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly theme = inject(GeneralService);
  protected readonly router = inject(Router);

  protected isMenuOpen = false;

  protected readonly navLinks: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/', fragment: 'about' },
    { label: 'Experience', path: '/', fragment: 'experience' },
    { label: 'Projects', path: '/', fragment: 'projects' },
    { label: 'Contact', path: '/', fragment: 'contact' },
    { label: 'Resume', path: '/resume' },
  ];

  toggleTheme(): void {
    this.theme.toggle();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  onDownloadResume(): void {
    const link = document.createElement('a');
    link.href = new URL('doj.docx', document.baseURI).href;
    link.download = 'doj.docx';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  onNav(link: NavLink, event?: Event): void {
    if (!link.fragment) return;
    event?.preventDefault();
    const navigateAndScroll = () => {
      // small timeout to ensure element is in DOM
      setTimeout(() => {
        const el = document.getElementById(link.fragment!);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    };

    if (this.router.url.split('#')[0] !== link.path) {
      this.router.navigate([link.path], { fragment: link.fragment }).then(navigateAndScroll);
    } else {
      navigateAndScroll();
    }
  }
}
