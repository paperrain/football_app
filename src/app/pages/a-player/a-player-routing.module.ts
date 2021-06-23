import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APlayerPage } from './a-player.page';

const routes: Routes = [
  {
    path: '',
    component: APlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class APlayerPageRoutingModule {}
