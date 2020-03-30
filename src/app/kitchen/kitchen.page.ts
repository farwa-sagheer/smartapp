import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.page.html',
  styleUrls: ['./kitchen.page.scss'],
})
export class KitchenPage  {

  constructor(private navCtrl: NavController) {}

  goAnOtherPage() {
    this.navCtrl.navigateForward("");
  }

}
