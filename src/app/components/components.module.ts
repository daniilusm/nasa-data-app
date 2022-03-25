import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ApodCardComponent } from './apod-card/apod-card.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { ModalDetailsComponent } from './modal-details/modal-details.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    NavMenuComponent,
    ApodCardComponent,
    FooterComponent,
    LoaderComponent,
    ModalDetailsComponent,
  ],
  exports: [
    NavMenuComponent,
    ApodCardComponent,
    FooterComponent,
    LoaderComponent,
    MatDialogModule
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class ComponentsModule { }
