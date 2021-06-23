import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ETeamPage } from './e-team.page';

const routes: Routes = [
  {
    path: '',
    component: ETeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ETeamPageRoutingModule {}
