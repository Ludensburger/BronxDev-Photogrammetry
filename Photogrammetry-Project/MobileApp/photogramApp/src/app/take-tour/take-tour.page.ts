import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-take-tour',
  templateUrl: './take-tour.page.html',
  styleUrls: ['./take-tour.page.scss'],
})
export class TakeTourPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  returnHome() {
    this.navCtrl.navigateBack('/home');
  }
}
