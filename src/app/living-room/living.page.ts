import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-living',
  templateUrl: './living.page.html',
  styleUrls: ['./living.page.scss'],
})
export class LivingPage {

  constructor(private navCtrl: NavController) {}

  goAnOtherPage() {
    this.navCtrl.navigateForward("");
  }


}
