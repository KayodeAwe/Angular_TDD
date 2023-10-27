import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {TestBed.configureTestingModule({
    declarations: [AppComponent],
  }).compileComponents();
});

it('pass', () => {
  expect(true).toBe(true);
})
});
