import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'teams/:Liga',
    loadChildren: () =>
      import('./pages/teams/teams.module').then((m) => m.TeamsPageModule),
  },
  {
    path: 'players/:Team',
    loadChildren: () =>
      import('./pages/players/players.module').then((m) => m.PlayersPageModule),
  },
  {
    path: 'addTeam',
    loadChildren: () =>
      import('./pages/a-team/a-team.module').then((m) => m.ATeamPageModule),
  },
  {
    path: 'editTeam/:id',
    loadChildren: () =>
      import('./pages/e-team/e-team.module').then((m) => m.ETeamPageModule),
  },
  {
    path: 'addPlayer',
    loadChildren: () =>
      import('./pages/a-player/a-player.module').then(
        (m) => m.APlayerPageModule
      ),
  },
  {
    path: 'editPlayer/:id',
    loadChildren: () =>
      import('./pages/e-player/e-player.module').then(
        (m) => m.EPlayerPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
