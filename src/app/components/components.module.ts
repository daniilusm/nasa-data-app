import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ApodCardComponent } from './apod-card/apod-card.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavMenuComponent,
    ApodCardComponent,
    FooterComponent,
  ],
  exports: [
    NavMenuComponent,
    ApodCardComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class ComponentsModule { }
