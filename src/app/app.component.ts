import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyWebsite';
  opentext(){
    document.getElementById("component").style.display = "block";
    // document.getElementById("test").style.display = "none";
  }
  blockdis(){
    document.getElementById("component").style.display = "none";
    // document.getElementById("test").style.display = "block";
  }
  myfun(){
    document.getElementById("test").style.display = "none";
  }
  myfunc(){
    document.getElementById("test").style.display = "block";
  }
}
