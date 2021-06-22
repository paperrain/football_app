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

  async getAllTeams() {
    const teams = await axios.get(`${environment.apiUrl}/teams`);
    return teams.data;
  }
}
