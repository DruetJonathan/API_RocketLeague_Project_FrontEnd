import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "../models/Player";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private basicUrl :string = "http://localhost:8080/";
  constructor(private _client : HttpClient) { }

  addPlayer(player : Player): Observable<Player>{
    console.log(this.basicUrl+"player/add")
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._client.post<Player>(this.basicUrl+"player/add",player, {headers});
}


}
