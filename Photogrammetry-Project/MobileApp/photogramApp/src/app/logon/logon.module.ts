import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogonPageRoutingModule } from './logon-routing.module';

import { LogonPage } from './logon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogonPageRoutingModule
  ],
  declarations: [LogonPage]
})
export class LogonPageModule {}
