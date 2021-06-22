import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teams, TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  selectedLeague: string;
  teams: Teams[] = [];

  constructor(
    private teamsService: TeamsService,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.selectedLeague = this.activeRouter.snapshot.paramMap.get('Liga');

    this.teamsService
      .getAllTeams()
      .then(
        (r) =>
          (this.teams = r.filter((data) => data.Liga == this.selectedLeague))
      );
  }
}
