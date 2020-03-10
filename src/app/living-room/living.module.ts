import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivingPageRoutingModule } from './living-routing.module';

import { LivingPage } from './living.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivingPageRoutingModule
  ],
  declarations: [LivingPage]
})
export class LivingPageModule {}
