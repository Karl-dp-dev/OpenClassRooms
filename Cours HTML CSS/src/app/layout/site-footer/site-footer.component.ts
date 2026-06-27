import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_LINKS, PROFILE, SOCIAL_LINKS } from '../../core/data/site.data';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-footer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {
  readonly profile = PROFILE;
  readonly socialLinks = SOCIAL_LINKS;
  readonly footerLinks = NAV_LINKS.filter((link) => link.path !== '/');
  readonly currentYear = new Date().getFullYear();
}
