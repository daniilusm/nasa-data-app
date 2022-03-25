import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetailsComponent } from '../modal-details/modal-details.component';

@Component({
  selector: 'app-apod-card',
  templateUrl: './apod-card.component.html',
  styleUrls: ['./apod-card.component.scss']
})
export class ApodCardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() data: any = '';

  ngOnInit(): void {
  }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(ModalDetailsComponent, { data });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
    console.log(dialogRef)
  }

}
