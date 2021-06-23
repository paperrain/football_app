import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

export interface Leagues {
  'Nombre De La Liga': string;
  Identificador: string;
  'Logo de la Liga': string;
}

@Injectable({
  providedIn: 'root',
})
export class LeaguesService {
  constructor() {}

  getAllLeagues() {
    return axios.get(`${environment.apiUrl}/leagues`).then((p) => p.data);
  }
}
