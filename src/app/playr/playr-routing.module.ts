import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayrPage } from './playr.page';

const routes: Routes = [
  {
    path: '',
    component: PlayrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayrPageRoutingModule {}
