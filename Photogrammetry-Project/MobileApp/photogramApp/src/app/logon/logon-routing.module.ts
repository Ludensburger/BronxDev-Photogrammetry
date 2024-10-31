import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogonPage } from './logon.page';

const routes: Routes = [
  {
    path: '',
    component: LogonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogonPageRoutingModule {}
