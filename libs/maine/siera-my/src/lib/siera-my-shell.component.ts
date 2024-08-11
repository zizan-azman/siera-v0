import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarDefaultComponent, NavbarDefaultConfig } from '@siera/maine-ui';
// import {
//   NavbarDefaultComponent,
//   NavbarDefaultConfig,
// } from '@siera/navbar-default';

@Component({
  selector: 'lib-siera-my-shell',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarDefaultComponent],
  templateUrl: './siera-my-shell.component.html',
  styleUrl: './siera-my-shell.component.scss',
})
export class SieraMyShellComponent {
  navbarConfig: NavbarDefaultConfig = {
    navbarDefaultLogo: {
      logoPath: 'siera-assets/svgs/icon/sprite.svg#siera-logo',
      logoUrl: '/',
      logoAlt: 'Siera Logo',
    },
    navbarDefaultLinkList: [
      { linkText: 'Who we are', linkUrl: '/who-we-are' },
      { linkText: 'What we do', linkUrl: '/what-we-do' },
      { linkText: 'News', linkUrl: '/news' },
    ],
    navbarDefaultContentEnd: { showAllWebsites: true, showModeSwitcher: true },
  };
}
