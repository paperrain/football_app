import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';
import { Teams, TeamsService } from 'src/app/services/teams.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-a-player',
  templateUrl: './a-player.page.html',
  styleUrls: ['./a-player.page.scss'],
})
export class APlayerPage implements OnInit {
  teams: Teams[] = [];

  isTeamEmpty: boolean = true;
  isNameEmpty: boolean = true;
  showErrorNameMessage: boolean = false;
  showErrorTeamMessage: boolean = false;
  showSuccessfulMessage: boolean = false;
  disabledButton: boolean = true;

  newPlayer = {
    'Nombre del Jugador': '',
    id: uuidv4(),
    Avatar: '',
    teamId: '',
  };

  addNewPlayer() {
    this.validateName();
    this.validateSelect();
    if (!this.isNameEmpty && !this.isTeamEmpty) {
      // temporal, para que tenga una foto por defecto:
      if (!this.newPlayer.Avatar) {
        this.newPlayer.Avatar =
          'https://robohash.org/etconsequunturreprehenderit.png?size=250x250&set=set2';
      }

      this.playerService.addNewPlayer(this.newPlayer);
      this.showSuccessfulMessage = true;
    }
  }

  validateName() {
    if (this.newPlayer['Nombre del Jugador']) {
      this.isNameEmpty = false;
      this.showErrorNameMessage = false;
    } else {
      this.isNameEmpty = true;
      this.showErrorNameMessage = true;
    }
  }
  validateSelect() {
    if (this.newPlayer.teamId) {
      this.isTeamEmpty = false;
      this.showErrorTeamMessage = false;
    } else {
      this.isTeamEmpty = true;
      this.showErrorTeamMessage = true;
    }
  }

  constructor(
    private teamsService: TeamsService,
    private playerService: PlayersService
  ) {
    this.teamsService.getAllTeams().then((data) => (this.teams = data));
  }

  ngOnInit() {}
}
