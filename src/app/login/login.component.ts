import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {

  formData :any = {
  };

ngOnInit():void{}
  
  constructor(private service: ServiceService, private router: Router) {}

  onSubmit() {
    console.log('form data before: ',this.formData);
    
    let fd = new FormData();
    fd.append('CIN', this.formData.CIN);
    fd.append('nom', this.formData.nom);
    fd.append('email', this.formData.email);
    fd.append('password', this.formData.password);
    
    // Access a specific element of the FormData object
    const cinValue = fd.get('CIN');
    console.log('CIN value:', cinValue);
  

    
    this.service.onSubmit(fd).subscribe(
      (res) => {
        this.router.navigate(['/Welcome']);
      },
      (error)=>{
        console.error('Form submission error:',error);
        
      }
    );
  
  }
}
