import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ATeamPageRoutingModule } from './a-team-routing.module';

import { ATeamPage } from './a-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ATeamPageRoutingModule
  ],
  declarations: [ATeamPage]
})
export class ATeamPageModule {}
