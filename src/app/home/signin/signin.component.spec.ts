import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import SigninComponent from './signin.component';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';

const mockRoutes: Routes = [
  {
    path: 'gerencial-master',
    component: SigninComponent,
  },
];

const mockFormValues = {
  email: 'email@gmail.com',
  password: 'password',
};

const handleInputsChange = (fixture: ComponentFixture<SigninComponent>, email: string, password: string) => {
  const event = new Event('input');
  const inputEmail = fixture.debugElement.query(By.css('.inputEmail'));
  const inputPassword = fixture.debugElement.query(By.css('.inputPassword'));

  inputEmail.nativeElement.value = email;
  inputPassword.nativeElement.value = password;
  fixture.detectChanges();
  inputEmail.nativeElement.dispatchEvent(event);
  inputPassword.nativeElement.dispatchEvent(event);
};

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let router: Router;
  let location: Location;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SigninComponent, NoopAnimationsModule, RouterTestingModule.withRoutes(mockRoutes)],
    }).compileComponents();
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(D) should display emailInput and passwordInput', () => {
    const inputEmail = fixture.debugElement.query(By.css('.inputEmail'));
    const inputPassword = fixture.debugElement.query(By.css('.inputPassword'));
    expect(inputEmail).toBeTruthy();
    expect(inputPassword).toBeTruthy();
  });

  it('(D) should hide password when click button', () => {
    const debugButton = fixture.debugElement.query(By.css('.hide-btn-password'));
    const button = debugButton.nativeElement as HTMLButtonElement;
    expect(component.hide).toBe(true);
    button.click();
    expect(component.hide).toBe(false);
    expect(button).toBeTruthy();
    expect(button.getAttribute('type')).toEqual('button');
  });

  it('(D) should loginForm to be valid when inputs populates', () => {
    const loginForm: FormGroup = component.loginForm;
    handleInputsChange(fixture, mockFormValues.email, mockFormValues.password);
    expect(loginForm.valid).toBe(true);
  });

  it('(D) should LoginForm to be  invalid when inputs are empty', () => {
    const loginForm: FormGroup = component.loginForm;
    handleInputsChange(fixture, '', '');
    expect(loginForm.valid).toBe(false);
  });

  it('(D) should LoginForm to be invalid when invalid email', () => {
    const loginForm: FormGroup = component.loginForm;
    handleInputsChange(fixture, 'email@gmail.', '232');
    expect(loginForm.valid).toBe(false);
  });

  it('(D) should the button be disabled when the form is invalid', () => {
    const debugButton = fixture.debugElement.query(By.css('.submit-button'));
    const button = debugButton.nativeElement as HTMLButtonElement;
    handleInputsChange(fixture, '', '');
    fixture.detectChanges();
    expect(button.getAttribute('disabled')).toBe('true');
  });

  it('(D) should the button be enabled when the form is valid', () => {
    const debugButton = fixture.debugElement.query(By.css('.submit-button'));
    const button = debugButton.nativeElement as HTMLButtonElement;
    handleInputsChange(fixture, mockFormValues.email, mockFormValues.password);
    fixture.detectChanges();
    expect(button.getAttribute('disabled')).toBeNull();
  });

  it('(D) should redirect to admin portal', () => {
    const routerSpy = jest.spyOn(router, 'navigate');
    const debugButton = fixture.debugElement.query(By.css('.submit-button'));
    const button = debugButton.nativeElement as HTMLButtonElement;
    handleInputsChange(fixture, 'gerencialmaster@gmail.com', '1234');
    fixture.detectChanges();

    button.click();

    expect(routerSpy).toHaveBeenCalledWith(['/gerencial-master']);
    expect(location.path()).toEqual('/gerencial-master');
  });

  it('should return mandatory email error', () => {
    const hasEmailRequiredError = component.getControlErrors('email', 'required');
    expect(hasEmailRequiredError).toBe(true);
  });

  it('should return pattern email error', () => {
    component.loginForm.get('email')?.patchValue('easda@sdada');
    const hasEmailPatternError = component.getControlErrors('email', 'pattern');
    expect(hasEmailPatternError).toBe(true);
  });

  it('should return control touched', () => {
    const event = new Event('blur');
    const inputEmail = fixture.debugElement.query(By.css('.inputEmail'));
    const inputPassword = fixture.debugElement.query(By.css('.inputPassword'));

    inputEmail.nativeElement.value = mockFormValues.email;
    inputEmail.nativeElement.value = mockFormValues.password;

    inputEmail.nativeElement.dispatchEvent(event);
    inputPassword.nativeElement.dispatchEvent(event);

    const hasEmailTouched = component.getControlTouched('email');
    const hasPasswordTouched = component.getControlTouched('password');
    expect(hasEmailTouched).toBe(true);
    expect(hasPasswordTouched).toBe(true);
  });
});
