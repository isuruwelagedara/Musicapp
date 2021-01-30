import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayrPageRoutingModule } from './playr-routing.module';

import { PlayrPage } from './playr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayrPageRoutingModule
  ],
  declarations: [PlayrPage]
})
export class PlayrPageModule {}
