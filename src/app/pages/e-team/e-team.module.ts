import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ETeamPageRoutingModule } from './e-team-routing.module';

import { ETeamPage } from './e-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ETeamPageRoutingModule
  ],
  declarations: [ETeamPage]
})
export class ETeamPageModule {}
