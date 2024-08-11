import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarDefaultConfig } from './navbar-default.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'maine-navbar-default',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar-default.component.html',
  styleUrl: './navbar-default.component.scss',
})
export class NavbarDefaultComponent implements OnInit {
  isDarkMode = false;
  resizeListener!: () => void;
  @ViewChild('menuCheckbox') menuCheckbox!: ElementRef;
  @Input() navbarDefaultConfig!: NavbarDefaultConfig;

  constructor(private _renderer: Renderer2) {}

  ngOnInit(): void {
    // Initialize mode from localStorage if available
    const savedMode = localStorage.getItem('mode');
    this.isDarkMode = savedMode === 'dark';
    this.applyMode();
    this.resizeListener = () => this.onResize();
    window.addEventListener('resize', this.resizeListener);
  }

  onClickMobileNavLink(): void {
    this.menuCheckbox.nativeElement.checked = false;
  }
  onResize(): void {
    if (this.menuCheckbox && window.innerWidth >= 905) {
      this.menuCheckbox.nativeElement.checked = false;
    }
  }
  onToggleMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('mode', this.isDarkMode ? 'dark' : 'light');
    this.applyMode();
  }
  applyMode(): void {
    // Remove the old mode attribute
    this._renderer.setAttribute(
      document.body,
      'data-mode',
      this.isDarkMode ? 'dark' : 'light'
    );
  }
}
