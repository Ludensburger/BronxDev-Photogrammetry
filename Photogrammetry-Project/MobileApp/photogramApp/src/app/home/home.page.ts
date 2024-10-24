import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  onCard1Click() {
    console.log('Card 1 clicked');
    this.navCtrl.navigateForward('/photogrammetry');
  }

  onCard2Click() {
    console.log('Card 2 clicked');
    this.navCtrl.navigateForward('/take-tour');
  }

  onCard3Click() {
    console.log('Card 3 clicked');
    this.navCtrl.navigateForward('/projects');
  }
}
