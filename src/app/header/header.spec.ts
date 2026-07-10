import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close the navigation menu', () => {
    expect((component as any).isMenuOpen).toBeFalsy();

    component.toggleMenu();
    expect((component as any).isMenuOpen).toBeTruthy();

    component.toggleMenu();
    expect((component as any).isMenuOpen).toBeFalsy();
  });
});
