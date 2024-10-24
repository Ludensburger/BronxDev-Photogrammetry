import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TakeTourPageRoutingModule } from './take-tour-routing.module';

import { TakeTourPage } from './take-tour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakeTourPageRoutingModule
  ],
  declarations: [TakeTourPage]
})
export class TakeTourPageModule {}
