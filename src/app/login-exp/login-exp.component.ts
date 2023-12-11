import { Component } from '@angular/core';

@Component({
  selector: 'app-login-exp',
  templateUrl: './login-exp.component.html',
  styleUrls: ['./login-exp.component.css']
})
export class LoginExpComponent {
  formData = {
    CIN: '',
    nom: '',
    email: '',
    password: '',
  };
}
