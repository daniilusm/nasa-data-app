import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss'],
  providers: [ApodService]
})
export class ApodComponent implements OnInit {


  @Output() data!: any;

  constructor(public apodService: ApodService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.apodService.getData().subscribe(data => {
      this.data = data;
    })
  }

  submitForm(form: NgForm) {
    let { startDate, endDate } = form.value.dateRange;
    let start = startDate.toISOString().slice(0, 10);
    let end = endDate.toISOString().slice(0, 10);
    this.apodService.getDataByDate(start, end).subscribe(data => {
      this.data = data;
      console.log(data)
    })
  }

}
