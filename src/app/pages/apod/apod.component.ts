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

  isLoading: boolean = false;

  constructor(public apodService: ApodService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.isLoading = true;
    this.apodService.getData().subscribe(data => {
      this.data = data;
      this.isLoading = false;
    })
  }

  submitForm(form: NgForm) {
    this.isLoading = true;
    let { startDate, endDate } = form.value.dateRange;
    let start = startDate.toISOString().slice(0, 10);
    let end = endDate.toISOString().slice(0, 10);
    this.apodService.getDataByDate(start, end).subscribe(data => {
      this.data = data;
      this.isLoading = false;
    })
  }

}
