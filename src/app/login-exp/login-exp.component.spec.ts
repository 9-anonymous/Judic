import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginExpComponent } from './login-exp.component';

describe('LoginExpComponent', () => {
  let component: LoginExpComponent;
  let fixture: ComponentFixture<LoginExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginExpComponent]
    });
    fixture = TestBed.createComponent(LoginExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
