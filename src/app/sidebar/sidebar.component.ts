import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit() {
  }

 openNav() {
    document.getElementById("mySidenav").style.width = "190px";
    document.getElementById("main").style.marginLeft = "190px";
}

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  // console.log(input);
  
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

routerLink(){ 
    console.log("hello sir ji kese ho ji kya kar rhe ho ji");
    this.router.navigate(['/Nurender'])
    
}

}
