import { Component } from '@angular/core';
import { Leagues, LeaguesService } from '../services/leagues.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  leagues: Leagues[] = [];

  constructor(private leaguesService: LeaguesService) {
    this.leaguesService.getAllLeagues().then((r) => (this.leagues = r));
  }
}
