import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Players, PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
  selectedTeam: string;
  players: Players[] = [];

  getPlayerData() {
    this.playersService
      .getAllPlayers()
      .then(
        (r) =>
          (this.players = r.filter(
            (data: { teamId: string }) => data.teamId == this.selectedTeam
          ))
      );
  }

  constructor(
    private playersService: PlayersService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Actualizada datos de los jugadores cuando se editen o eliminen
    this.activeRouter.params.subscribe((params) => {
      // Obtiene los parametros
      this.selectedTeam = params['Team'];
      // Llama a la funcion
      this.getPlayerData();
    });
  }
}
