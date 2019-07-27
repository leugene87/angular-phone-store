import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() productInput;
  constructor() { }

  ngOnInit() {
  }
  notifyMe(){
    alert("WOW!! THIS IS TOO MUCH, MAN!!");
  }

}