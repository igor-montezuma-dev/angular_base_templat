import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
;
import { Observable } from 'rxjs';
import { emailRegex } from '../../core/helpers/regex-email';
import { SideImageControllerService } from '../../core/services/side-image-controller.service';

const materialModules = [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule];
const angularModules = [CommonModule, ReactiveFormsModule, RouterModule];

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [...angularModules, ...materialModules],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export default class ForgotPasswordComponent implements OnInit, AfterContentInit {
  public image$!: Observable<string>
  private readonly destroy: DestroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly fb = inject(FormBuilder);
  private sideImageService: SideImageControllerService = inject(SideImageControllerService);
  hide = true;
  forgotPassword!: FormGroup;

  ngOnInit(): void {
    this.buildForgotPassword();
  }

  public ngAfterContentInit(): void {
    this.image$ = this.sideImageService.image$.pipe(takeUntilDestroyed(this.destroy));
    this.sideImageService.setImage('assets/svg/side-image.svg');
  }

  buildForgotPassword() {
    this.forgotPassword = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
    });
  }

  submit() {

    this.router.navigate(['../resetar-senha'], { relativeTo: this.route });
  }

  getControlErrors(control: string, error: string) {
    return this.forgotPassword.get(control)?.hasError(error);
  }

  getControlTouched(control: string) {
    return this.forgotPassword.get(control)?.touched;
  }
}
