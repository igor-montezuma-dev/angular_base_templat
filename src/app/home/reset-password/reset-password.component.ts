import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/auth/auth.service';
import { SideImageControllerService } from '../../core/services/side-image-controller.service';
import { openSnackBar } from '../../shared/utils/snackbar.utils';



const materialModules = [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatSnackBarModule];
const angularModules = [CommonModule, ReactiveFormsModule, RouterModule];

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [...angularModules, ...materialModules],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export default class ResetPasswordComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  public snackBar: MatSnackBar = inject(MatSnackBar);
  private readonly service = inject(AuthService);
  private readonly destroy: DestroyRef = inject(DestroyRef);
  hide = true;
  loginForm!: FormGroup;
  public image$!: Observable<string>
  private sideImageService: SideImageControllerService = inject(SideImageControllerService);

  ngOnInit(): void {
    this.buildLoginForm();
  }

  public ngAfterContentInit(): void {
    this.image$ = this.sideImageService.image$.pipe(takeUntilDestroyed(this.destroy));
    this.sideImageService.setImage('assets/svg/side-image.svg');
  }

  buildLoginForm() {
    this.loginForm = this.fb.group({
      token: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  submit() {
    const { email, password, confirmPassword } = this.loginForm.value;
    if (this.passwordMatchValidator()) {
      openSnackBar(this.snackBar, 'Senha alterada com sucesso!');
      this.router.navigate(['']);
    } else {
      openSnackBar(this.snackBar, 'As senhas não coincidem!');
    }
  }

  passwordMatchValidator() {
    return this.loginForm.get('password')?.value === this.loginForm.get('confirmPassword')?.value;
  }

  getControlErrors(control: string, error: string) {
    return this.loginForm.get(control)?.hasError(error);
  }

  getControlTouched(control: string) {
    return this.loginForm.get(control)?.touched;
  }
}
