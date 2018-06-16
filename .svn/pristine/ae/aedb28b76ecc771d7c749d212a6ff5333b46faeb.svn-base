import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      
    $('a[data-slide="prev"]').click(function() {
      $('#bbbp-carousel').carousel('prev');
    });
    
    $('a[data-slide="next"]').click(function() {
      $('#bbbp-carousel').carousel('next');
    });
 }

}
