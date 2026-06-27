import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRICING_TABLE, SERVICES_LIST } from '../../core/data/site.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  readonly services = SERVICES_LIST;
  readonly pricing = PRICING_TABLE;
}
