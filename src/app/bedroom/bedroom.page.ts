import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.page.html',
  styleUrls: ['./bedroom.page.scss'],
})
export class BedroomPage {

  constructor(private navCtrl: NavController) {}

  goAnOtherPage() {
    this.navCtrl.navigateForward("");
  }


}
