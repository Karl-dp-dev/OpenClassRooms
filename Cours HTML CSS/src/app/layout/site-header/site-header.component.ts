import { Component } from '@angular/core';
import { PROFILE, SOCIAL_LINKS } from '../../core/data/site.data';

@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
})
export class SiteHeaderComponent {
  readonly profile = PROFILE;
  readonly socialLinks = SOCIAL_LINKS;
}
