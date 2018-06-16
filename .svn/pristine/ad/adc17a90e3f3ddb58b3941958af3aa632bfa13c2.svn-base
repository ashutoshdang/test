import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/finally';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private app: AppService, private http: HttpClient, private router: Router) {
 
  }
  
  ngAfterViewInit(){
    $(".main-content").css("min-height", $(window).height()-150);
  }

  ngOnInit(){   
   /** start of header fix on scroll down **/          
   $(window).scroll(function () {     
    // console.log($(window).scrollTop())
   if ($(window).scrollTop() > 149) {
     $('#header').addClass('navbar-fixed');
     $(".left-list").addClass('left-side-scroll');
   }
   if ($(window).scrollTop() < 150) {
     $('#header').removeClass('navbar-fixed');
     $(".left-list").removeClass('left-side-scroll');
   }
 }); 
/** end of header fix on scroll down **/   
  }
 }
