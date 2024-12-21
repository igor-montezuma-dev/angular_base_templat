import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddressService } from '../../../core/services/address.service';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective, MatFormFieldModule, MatInputModule],
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly service = inject(AddressService);
  addressForm: FormGroup;

  constructor() {
    this.addressForm = this.fb.group({
      zipCode: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  getAddress(event: Event) {
    const zipCode = (event.target as HTMLInputElement).value;
    this.service.getAddress(zipCode).subscribe({
      next: response => {
        this.setControl('street', response.logradouro);
        this.setControl('district', response.bairro);
        this.setControl('city', response.localidade);
        this.setControl('state', response.uf);
      },
    });
  }

  private setControl(control: string, value: string) {
    this.addressForm.get(control)?.patchValue(value);
  }

  public getForm(): FormGroup {
    return this.addressForm.value;
  }
}
