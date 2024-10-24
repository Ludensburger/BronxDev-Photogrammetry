import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotogrammetryPageRoutingModule } from './photogrammetry-routing.module';

import { PhotogrammetryPage } from './photogrammetry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotogrammetryPageRoutingModule
  ],
  declarations: [PhotogrammetryPage]
})
export class PhotogrammetryPageModule {}
