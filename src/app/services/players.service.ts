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

  // Obtener todos los jugadores
  getAllPlayers() {
    return axios.get(`${environment.apiUrl}/players`).then((p) => p.data);
  }

  // Obtener un solo jugador
  getPlayerId(id: string) {
    return axios.get(`${environment.apiUrl}/players/${id}`).then((r) => r.data);
  }

  // Añadir nuevo jugador
  addNewPlayer(player: Players) {
    axios.post(`${environment.apiUrl}/players`, player);
  }

  // Editar jugador en base a su id
  editPlayerId(player: Players) {
    axios.put(`${environment.apiUrl}/players/${player.id}`, {
      'Nombre del Jugador': player['Nombre del Jugador'],
      Avatar: player.Avatar,
      teamId: player.teamId,
    });
  }

  // Borrar usuario por id
  deletePlayerId(id: string) {
    axios.delete(`${environment.apiUrl}/players/${id}`);
  }
}
