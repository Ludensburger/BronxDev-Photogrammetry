import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakeTourPage } from './take-tour.page';

const routes: Routes = [
  {
    path: '',
    component: TakeTourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakeTourPageRoutingModule {}
