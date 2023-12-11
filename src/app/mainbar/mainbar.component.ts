import { Component } from '@angular/core';

@Component({
  selector: 'app-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrls: ['./mainbar.component.css']
})
export class MainbarComponent {
    test="Contactez-Nous"

    showData($event: any){ 
      console.log("button is clicked!"); if($event) { 
         console.log($event.target); 
         console.log($event.target.value); 
      } 
   } 

   userName:string = "Peter"; 
}
