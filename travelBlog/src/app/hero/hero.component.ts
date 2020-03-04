import { Component, OnInit } from '@angular/core';
@ Component({
selector: 'hero',
templateUrl: './hero.component.html',
styleUrls: [ './hero.component.css' ]
})

export class HeroComponent implements  OnInit {
public heroHeading: string;
public  heroText: string;
public heroBtnText : string;
public heroBtnUrl:   string;

constructor() {

  this.heroHeading =  "Welcome to Travelex";
  this.heroText =  "Making your travel bookings easier, one click at a time ";
  this.heroBtnText =  "View Bookings";

}

ngOnInit() {

}

}