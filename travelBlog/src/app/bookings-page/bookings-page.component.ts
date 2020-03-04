import { Component, OnInit } from '@angular/core';
import { booking } from '../travel';

@Component({
  selector: 'bookings-page',
  templateUrl: './bookings-page.component.html',
  styleUrls: ['./bookings-page.component.css']
})
export class BookingsPageComponent implements OnInit {
  booking = booking;
  constructor() { }

  ngOnInit(): void {
  }

}
