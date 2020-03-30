import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinningroomPageRoutingModule } from './dinningroom-routing.module';

import { DinningroomPage } from './dinningroom.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MatButtonModule, MatCardModule, MatTabsModule, MatChipsModule, MatIconModule, MatToolbarModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule,MatGridListModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatGridListModule,
    DinningroomPageRoutingModule
  ],
  declarations: [DinningroomPage]
})
export class DinningroomPageModule {}
