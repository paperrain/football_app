import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

export interface Teams {
  'Nombre del equipo': string;
  id: string;
  'Logo del Equipo': string;
  Liga: string;
}

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor() {}

  // Obtener todos los equipos
  getAllTeams() {
    return axios.get(`${environment.apiUrl}/teams`).then((p) => p.data);
  }

  // Obtener un solo equipo
  getTeamId(id: string) {
    return axios.get(`${environment.apiUrl}/teams/${id}`).then((r) => r.data);
  }

  // Añadir nuevo equipo
  addNewTeam(team: Teams) {
    axios.post(`${environment.apiUrl}/teams`, team);
  }

  // Editar equipo en base a su id
  editTeamId(team: Teams) {
    axios.put(`${environment.apiUrl}/teams/${team.id}`, {
      'Nombre del equipo': team['Nombre del equipo'],
      'Logo del Equipo': team['Logo del Equipo'],
      Liga: team.Liga,
    });
  }

  // Borrar equipo por id
  deleteTeamId(id: string) {
    axios.delete(`${environment.apiUrl}/teams/${id}`);
  }
}
