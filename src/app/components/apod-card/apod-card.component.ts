import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apod-card',
  templateUrl: './apod-card.component.html',
  styleUrls: ['./apod-card.component.scss']
})
export class ApodCardComponent implements OnInit {

  constructor() { }

  @Input() data: any = '';
  details: boolean = false;

  ngOnInit(): void {
  }

  showDetails(value: boolean) {
    this.details = value;
  }

}
