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

  constructor(
    private playersService: PlayersService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {
    // Necesario para no necesitar recarga manual ???
    this.router.onSameUrlNavigation = 'reload';
  }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe((params) => {
      this.selectedTeam = params.get('Team');
    });
    this.playersService
      .getAllPlayers()
      .then(
        (r) =>
          (this.players = r.filter(
            (data: { teamId: string }) => data.teamId == this.selectedTeam
          ))
      );
  }
}
