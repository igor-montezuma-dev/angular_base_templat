import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './../../core/auth/auth.service';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import { emailRegex } from '../../core/helpers/regex-email';
import { SideImageControllerService } from '../../core/services/side-image-controller.service';

const materialModules = [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule];
const angularModules = [CommonModule, ReactiveFormsModule, RouterModule];

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [...angularModules, ...materialModules],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export default class SigninComponent implements OnInit, AfterContentInit {
  private readonly destroy: DestroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private readonly service = inject(AuthService);
  public snackBar: MatSnackBar = inject(MatSnackBar);
  public image$!: Observable<string>;
  hide = true;
  loginForm!: FormGroup;
  credential!: string;
  password!: string;

  ngOnInit(): void {
    this.buildLoginForm();
  }

  public sideImageService: SideImageControllerService = inject(SideImageControllerService);

  public ngAfterContentInit(): void {
    this.image$ = this.sideImageService.image$.pipe(takeUntilDestroyed(this.destroy));
    this.sideImageService.setImage();
  }

  buildLoginForm() {
    this.loginForm = this.fb.group({
      credential: ['', [Validators.required, Validators.pattern(emailRegex)]],
      password: ['', [Validators.required]],
    });
  }

  submit() {
    const email = this.loginForm.get('credential')?.value;
    const password = this.loginForm.get('password')?.value;



    if (email == 'admin.master@email.com' && password == '1234') {
      this.router.navigate(['/admin']);
    }
    // this.service
    //   .auth({
    //     credential,
    //     password,
    //   })
    //   .subscribe({
    //     next: () => {
    //       openSnackBar(this.snackBar, `Login efetuado com sucesso!`);
    //
    //     },
    //     error: err => openSnackBar(this.snackBar, err.error.error),
    //   });
    //this.router.navigate(['admin']);
  }

  getControlErrors(control: string, error: string) {
    return this.loginForm.get(control)?.hasError(error);
  }

  getControlTouched(control: string) {
    return this.loginForm.get(control)?.touched;
  }
}
