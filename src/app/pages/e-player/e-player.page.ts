import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Players, PlayersService } from 'src/app/services/players.service';
import { Teams, TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-e-player',
  templateUrl: './e-player.page.html',
  styleUrls: ['./e-player.page.scss'],
})
export class EPlayerPage implements OnInit {
  constructor(
    private playerService: PlayersService,
    private activeRouter: ActivatedRoute,
    private teamsService: TeamsService,
    private router: Router
  ) {
    this.selectedPlayer = this.activeRouter.snapshot.paramMap.get('id');

    this.playerService.getPlayerId(this.selectedPlayer).then((data) => {
      this.editPlayer = data;
    });

    this.teamsService.getAllTeams().then((data) => (this.teams = data));
  }

  // player = { 'Nombre del Jugador': '', id: '', Avatar: '', teamId: '' };
  teams: Teams[] = [];
  selectedPlayer: string;

  isNameEmpty: boolean = true;
  showErrorNameMessage: boolean = false;
  showSuccessfulMessage: boolean = false;

  editPlayer = {
    'Nombre del Jugador': '',
    id: '',
    Avatar: '',
    teamId: '',
  };

  editPlayerId() {
    this.validateName();
    if (!this.isNameEmpty) {
      this.playerService.editPlayerId(this.editPlayer);
      this.showSuccessfulMessage = true;
    }
  }

  deletePlayerId() {
    this.playerService.deletePlayerId(this.editPlayer.id);
    this.router.navigate(['players/' + this.editPlayer.teamId]);
  }

  validateName() {
    if (this.editPlayer['Nombre del Jugador']) {
      this.isNameEmpty = false;
      this.showErrorNameMessage = false;
    } else {
      this.isNameEmpty = true;
      this.showErrorNameMessage = true;
    }
  }

  ngOnInit() {}
}
