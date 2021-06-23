import { Component, OnInit } from '@angular/core';
import { Leagues, LeaguesService } from 'src/app/services/leagues.service';
import { TeamsService } from 'src/app/services/teams.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-a-team',
  templateUrl: './a-team.page.html',
  styleUrls: ['./a-team.page.scss'],
})
export class ATeamPage implements OnInit {
  leagues: Leagues[] = [];

  isTeamEmpty: boolean = true;
  isNameEmpty: boolean = true;
  showErrorNameMessage: boolean = false;
  showErrorLigaMessage: boolean = false;
  showSuccessfulMessage: boolean = false;
  disabledButton: boolean = true;

  newTeam = {
    'Nombre del equipo': '',
    id: uuidv4(),
    'Logo del Equipo': '',
    Liga: '',
  };

  addNewPlayer() {
    this.validateName();
    this.validateSelect();
    if (!this.isNameEmpty && !this.isTeamEmpty) {
      // temporal, para que tenga una foto por defecto:
      if (!this.newTeam['Logo del Equipo']) {
        this.newTeam['Logo del Equipo'] =
          'https://robohash.org/etconsequunturreprehenderit.png?size=250x250&set=set3';
      }
      this.teamsService.addNewTeam(this.newTeam);
      this.showSuccessfulMessage = true;
    }
  }

  validateName() {
    if (this.newTeam['Nombre del equipo']) {
      this.isNameEmpty = false;
      this.showErrorNameMessage = false;
    } else {
      this.isNameEmpty = true;
      this.showErrorNameMessage = true;
    }
  }
  validateSelect() {
    if (this.newTeam.Liga) {
      this.isTeamEmpty = false;
      this.showErrorLigaMessage = false;
    } else {
      this.isTeamEmpty = true;
      this.showErrorLigaMessage = true;
    }
  }

  constructor(
    private teamsService: TeamsService,
    private leaguesService: LeaguesService
  ) {
    this.leaguesService.getAllLeagues().then((data) => (this.leagues = data));
  }

  ngOnInit() {}
}
