import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class GeneralService {
  readonly theme = signal<Theme>('dark');

  toggle(): void {
    this.theme.set(this.theme() === 'dark' ? 'light' : 'dark');
  }

  isLight(): boolean {
    return this.theme() === 'light';
  }
}
