import {Component, OnInit} from '@angular/core';
import {PlayerService} from "../../../services/player.service";
import {Player} from "../../../models/Player";
import {filter, map, Observable, tap} from "rxjs";
import {Rank} from "../../../models/Rank";
import {Ranks} from "../../../models/Ranks";
import {Plateforms} from "../../../models/Plateforms";
import {TeamService} from "../../../services/team.service";
import {Team} from "../../../models/Team";

@Component({
  selector: 'app-see-all-players',
  templateUrl: './see-all-players.component.html',
  styleUrls: ['./see-all-players.component.scss']
})
export class SeeAllPlayersComponent implements OnInit{
  ngOnInit(): void {
  }

  // listPlayers$! : Observable< Player[]>;
  // teams!:Team[];
  // typeRank: string[] = ["Duel Solo","Doubles","Trio"]
  // constructor(private _playerServ:PlayerService,private _teamServ:TeamService) {
  // }
  //
  // getAllPlayers(){
  //   this.listPlayers$ = this._playerServ.getAllPlayers()
  // }
  //
  // ngOnInit(): void {
  //   this.getAllPlayers();
  //   this.getAllTeams();
  // }
  // getImageByNameRank(rank : Ranks){
  //   return this._playerServ.getImageByNameRank(rank);
  // }
  //
  // getImagePlateformByName(plateform: Plateforms) {
  //   return this._playerServ.getImagePlateformByName(plateform);
  // }
  // getAllTeams(){
  //   this._teamServ.getAllTeams().subscribe(teams => {
  //     this.teams = teams;
  //     console.log(teams)
  //   });
  // }
  // getTeamNameById(teamId: number): Observable<string> {
  //   return this._teamServ.getById(teamId).pipe(
  //     map(team => {
  //       console.log(team.teamName)
  //       return team ? team.teamName : 'Unknown Team';
  //     })
  //   );
  // }
}
