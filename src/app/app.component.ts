import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  options: FormGroup;
  isMenu:boolean;
  text:string;
  wish:string;

  constructor() {
    
  }
  ngOnInit(){
    this.text = localStorage.getItem("location");
    this.wish = localStorage.getItem("wish");
}
saveLocation(){
  localStorage.setItem("location",this.text);
}
saveWish(){
  localStorage.setItem("wish",this.wish);
}
  goToCrew(){
    document.body.scrollTop = 700;
    document.documentElement.scrollTop = 700;
  }

  changeOpacity(value:number, id:string){
    let i = 1;
    console.log(value-i*0.1 + "id: " + id);
    while(i < 10) {
      let change = value-i*0.1;
      console.log(change);
      document.getElementById(id).style.opacity = (change).toString();
    i++;
    }
   }

   openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
