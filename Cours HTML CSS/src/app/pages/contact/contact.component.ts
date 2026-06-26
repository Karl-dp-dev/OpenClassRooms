import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactFormData } from '../../core/models/site.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly submitted = signal(false);

  readonly nameControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(2)],
  });

  readonly emailControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email],
  });

  readonly phoneControl = new FormControl('', { nonNullable: true });

  readonly messageControl = new FormControl(
    'Bonjour Karl, je souhaiterais des renseignements.',
    {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)],
    }
  );

  readonly contactForm: FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    phone: FormControl<string>;
    message: FormControl<string>;
  }>;

  constructor(private readonly fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: this.nameControl,
      email: this.emailControl,
      phone: this.phoneControl,
      message: this.messageControl,
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const data = this.contactForm.getRawValue() as ContactFormData;
    const subject = encodeURIComponent(`Contact portfolio — ${data.name}`);
    const body = encodeURIComponent(
      `Nom : ${data.name}\nEmail : ${data.email}\nTéléphone : ${data.phone || 'Non renseigné'}\n\n${data.message}`
    );

    window.location.href = `mailto:contact@example.com?subject=${subject}&body=${body}`;
    this.submitted.set(true);
  }
}
