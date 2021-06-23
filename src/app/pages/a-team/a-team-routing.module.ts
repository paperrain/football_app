import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ATeamPage } from './a-team.page';

const routes: Routes = [
  {
    path: '',
    component: ATeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ATeamPageRoutingModule {}
