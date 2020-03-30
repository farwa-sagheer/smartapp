import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinningroomPage } from './dinningroom.page';

const routes: Routes = [
  {
    path: '',
    component: DinningroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinningroomPageRoutingModule {}
