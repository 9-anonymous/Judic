import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  progressWidth: string = '0%';
  showForm:boolean =true;

  OpenModal(){
    const modelDiv = document.getElementById('staticBackdrop');
    if(modelDiv!=null){
      modelDiv.style.display='block'
    }
    const modelbg = document.getElementById('bg');
    if(modelbg!=null){
      modelbg.style.display='block'
    }
  }
  
  
  CloseModal(){
    const modelDiv = document.getElementById('staticBackdrop');
    if(modelDiv!=null){
      modelDiv.style.display='none'
    }
    const modelbg = document.getElementById('bg');
    if(modelbg!=null){
      modelbg.style.display='none'
    }
  }


  
  NextProgress(){
    this.showForm=!this.showForm;
    if(this.progressWidth==='0%'){
     this.progressWidth='33%' 
    }else if (this.progressWidth==='33%'){
      this.progressWidth='66%'
    }else if (this.progressWidth==='66%'){
      this.progressWidth='100%'
    }
  }

  BackProgress(){
    if(this.progressWidth==='100%'){
      this.progressWidth='66%' 
     }else if (this.progressWidth==='66%'){
       this.progressWidth='33%'
     }else if (this.progressWidth==='33%'){
       this.progressWidth='0%'
     }
  }

}
