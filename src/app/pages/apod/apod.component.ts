import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss'],
  providers: [ApodService]
})
export class ApodComponent implements OnInit {

  data!: any;

  constructor(public apodService: ApodService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apodService.getData().subscribe(data => {
      this.data = data;
    })
  }

}
