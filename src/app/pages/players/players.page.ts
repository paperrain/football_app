import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Players, PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
  selectedTeam: string;
  players: Players[] = [];

  constructor(
    private playersService: PlayersService,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.selectedTeam = this.activeRouter.snapshot.paramMap.get('Team');

    this.playersService
      .getAllPlayers()
      .then(
        (r) =>
          (this.players = r.filter((data) => data.teamId == this.selectedTeam))
      );
  }
}
