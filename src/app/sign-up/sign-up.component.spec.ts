import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent]
    });
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('SignUpComponent', () => {
    it('has Sign Up header', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const h1 = signUp.querySelector('h1');
      expect(h1?.textContent).toBe('Sign Up')
    })
    it('has username input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const label = signUp.querySelector('label[for="username"]');
      const input = signUp.querySelector('input[id="username"]');
      expect(label).toBeTruthy();
      expect(input).toBeTruthy();
      expect(label?.textContent).toContain('Username');
    })
    it('has Email input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const label = signUp.querySelector('label[for="email"]');
      const input = signUp.querySelector('input[id="email"]');
      expect(label).toBeTruthy();
      expect(label?.textContent).toContain('E-mail');
      expect(input).toBeTruthy();
    })
    it('has password input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const label = signUp.querySelector('label[for="password"]');
      const input = signUp.querySelector('input[id="password"]');
      expect(label).toBeTruthy();
      expect(label?.textContent).toContain('Password');
      expect(input).toBeTruthy();
    })
    it('has password type for password input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const input= signUp.querySelector('input[id="password"]') as HTMLInputElement;
      expect(input.type).toBeTruthy();
    })
    it('has password repeat input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const label = signUp.querySelector('label[for="passwordRepeat"]');
      const input = signUp.querySelector('input[id="passwordRepeat"]');
      expect(label).toBeTruthy();
      expect(label?.textContent).toContain('Password Repeat');
      expect(input).toBeTruthy();
    })
    it('has password type for password Repeat input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const input= signUp.querySelector('input[id="passwordRepeat"]') as HTMLInputElement;
      expect(input.type).toBeTruthy();
    })
    it('has Sign Up button', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const button = signUp.querySelector('button');
      expect(button).toBeTruthy
      expect(button?.textContent).toBe('Sign Up')
    })
    it('disables the button initially', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const button = signUp.querySelector('button');
      expect(button?.disabled).toBeTruthy();
    })
  })

  describe('interactions', () => {
    it('enables the button when the password and password repeat fields have the same values', ()=>{
      const signUp = fixture.nativeElement as HTMLElement;
      const passwordinput= signUp.querySelector('input[id="password"]') as HTMLInputElement;
      const passwordRepeatinput= signUp.querySelector('input[id="passwordRepeat"]') as HTMLInputElement;
      passwordinput.value = "P4ssword";
      passwordinput.dispatchEvent(new Event('input'));
      passwordRepeatinput.value="P4ssword";
      passwordRepeatinput.dispatchEvent(new Event('input'));
      //
      fixture.detectChanges();
      const button = signUp.querySelector('button');
      expect(button?.disabled).toBeFalsy();
    })

  })
});



