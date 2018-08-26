import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  script(){
    $(document).ready(function() {
      $("#ser-input").focus(function() {
        $('.search-full-view').addClass("search-normal-screen");
      });
      $("#search-close").click(function() {
        $('.search-full-view').removeClass("search-normal-screen");
      });
    }); }

  // script(){
  //   var element = document.getElementById("ser-input");
  //   element.classList.add("search-normal-screen");
    // jquery(document).ready(function() {
    //   $("#ser-input").focus(function() {
    //     $('.search-full-view').addClass("search-normal-screen");
    //   });
    //   $("#search-close").click(function() {
    //     $('.search-full-view').removeClass("search-normal-screen");
    //   });
    // });
  // }
}
