import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayer(playerName: string, id: boolean) {
    if (id) {
      return this.http.get('http://192.168.178.17:5000/player?player=' + playerName + '&id=true');
    } else {
      return this.http.get('http://192.168.178.17:5000/player?player=' + playerName);
    }
  }

  getAllPlayers() {
    return this.http.get('http://192.168.178.17:5000/players');
  }
}
