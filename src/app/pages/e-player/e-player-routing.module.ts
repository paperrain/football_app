import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EPlayerPage } from './e-player.page';

const routes: Routes = [
  {
    path: '',
    component: EPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EPlayerPageRoutingModule {}
