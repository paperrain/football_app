import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

export interface Players {
  'Nombre del Jugador': string;
  id: string;
  Avatar: string;
  teamId: string;
}

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
