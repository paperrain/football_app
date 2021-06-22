import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor() {}

  async getAllPlayers() {
    const players = await axios.get(`${environment.apiUrl}/players`);
    return players.data;
  }
}
