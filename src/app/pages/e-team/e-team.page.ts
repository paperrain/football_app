import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Leagues, LeaguesService } from 'src/app/services/leagues.service';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-e-team',
  templateUrl: './e-team.page.html',
  styleUrls: ['./e-team.page.scss'],
})
export class ETeamPage implements OnInit {
  leagues: Leagues[] = [];

  isTeamEmpty: boolean = true;
  isNameEmpty: boolean = true;
  showErrorNameMessage: boolean = false;
  showErrorLigaMessage: boolean = false;
  showSuccessfulMessage: boolean = false;
  disabledButton: boolean = true;

  selectedTeam: string;

  editTeam = {
    'Nombre del equipo': '',
    id: '',
    'Logo del Equipo': '',
    Liga: '',
  };

  editTeamId() {
    this.validateName();
    if (!this.isNameEmpty) {
      this.teamsService.editTeamId(this.editTeam);
      this.showSuccessfulMessage = true;
    }
  }

  deleteTeamId() {
    this.teamsService.deleteTeamId(this.editTeam.id);
    this.playersService.deleteAllPlayersTeamId(this.editTeam.id);
    this.router.navigate(['teams/' + this.editTeam.Liga]);
  }

  validateName() {
    if (this.editTeam['Nombre del equipo']) {
      this.isNameEmpty = false;
      this.showErrorNameMessage = false;
    } else {
      this.isNameEmpty = true;
      this.showErrorNameMessage = true;
    }
  }

  constructor(
    private teamsService: TeamsService,
    private leaguesService: LeaguesService,
    private activeRouter: ActivatedRoute,
    private playersService: PlayersService,
    private router: Router
  ) {
    this.selectedTeam = this.activeRouter.snapshot.paramMap.get('id');

    this.leaguesService.getAllLeagues().then((data) => (this.leagues = data));
    this.teamsService
      .getTeamId(this.selectedTeam)
      .then((data) => (this.editTeam = data));
  }

  ngOnInit() {}
}
