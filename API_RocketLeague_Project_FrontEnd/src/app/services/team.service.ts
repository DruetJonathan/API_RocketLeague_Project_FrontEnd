import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Team} from "../models/Team";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private basicUrl :string = "http://localhost:8080/";
  constructor(private _client : HttpClient) { }
  addTeam(team:Team):Observable<Team>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._client.post<Team>(this.basicUrl+"team/add",team, {headers});
  }
  getAllTeams():Observable<Team[]>{
    return this._client.get<Team[]>(this.basicUrl+"teams")
  }
  modifyTeam(team:Team):Observable<Team>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._client.post<Team>(this.basicUrl+"team/modify/"+team.id,team, {headers});
  }
  deleteTeam(team:Team):Observable<Boolean>{
    return this._client.delete<Boolean>(this.basicUrl+"team/delete/"+team.id+team.id)
  }
}
