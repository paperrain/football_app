import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { APlayerPageRoutingModule } from './a-player-routing.module';

import { APlayerPage } from './a-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    APlayerPageRoutingModule
  ],
  declarations: [APlayerPage]
})
export class APlayerPageModule {}
