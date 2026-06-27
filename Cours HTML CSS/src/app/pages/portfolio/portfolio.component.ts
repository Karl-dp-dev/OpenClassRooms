import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PORTFOLIO_PHOTOS } from '../../core/data/site.data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  readonly photos = PORTFOLIO_PHOTOS;
}
