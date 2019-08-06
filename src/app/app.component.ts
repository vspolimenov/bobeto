import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  options: FormGroup;
  title = 'bobeto';
  isMenu:boolean;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });
  }
  ngOnInit(){
    this.isMenu = false;
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
  
  mouseEnter(div : string){
  //this.changeOpacity(1,div);
    console.log("Enter")
 }

 mouseLeave(div : string){
 }

  // Get the image and insert it inside the modal - use its "alt" text as a caption

  public modalImg:string;
  public videoModal:string;
 
  
  // When the user clicks on <span> (x), close the modal

 
 onClickImg(image:string, id){
  var modal = document.getElementById(id);
    modal.style.display = "block";
    this.modalImg = image;
  }

  hideModal(id){
    var modal = document.getElementById(id);
    modal.style.display = "none";
  }
 
clickMenu(){
if(this.isMenu) {
  this.isMenu = false;
}else {
  this.isMenu = true;
}
}
  
}
