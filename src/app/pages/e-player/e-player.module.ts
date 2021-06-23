import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EPlayerPageRoutingModule } from './e-player-routing.module';

import { EPlayerPage } from './e-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EPlayerPageRoutingModule
  ],
  declarations: [EPlayerPage]
})
export class EPlayerPageModule {}
