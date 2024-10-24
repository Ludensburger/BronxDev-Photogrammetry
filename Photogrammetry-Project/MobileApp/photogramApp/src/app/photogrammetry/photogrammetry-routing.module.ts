import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotogrammetryPage } from './photogrammetry.page';

const routes: Routes = [
  {
    path: '',
    component: PhotogrammetryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotogrammetryPageRoutingModule {}
