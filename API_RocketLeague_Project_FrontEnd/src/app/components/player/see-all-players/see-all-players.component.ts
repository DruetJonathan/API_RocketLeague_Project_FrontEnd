import {Component, OnInit} from '@angular/core';
import {PlayerService} from "../../../services/player.service";
import {Player} from "../../../models/Player";
import {Observable, tap} from "rxjs";
import {Rank} from "../../../models/Rank";
import {Ranks} from "../../../models/Ranks";
import {Plateforms} from "../../../models/Plateforms";

@Component({
  selector: 'app-see-all-players',
  templateUrl: './see-all-players.component.html',
  styleUrls: ['./see-all-players.component.scss']
})
export class SeeAllPlayersComponent implements OnInit{

  listPlayers$! : Observable< Player[]>;
  typeRank: string[] = ["Duel Solo","Doubles","Trio"]
  constructor(private _playerServ:PlayerService) {
  }

  getAllPlayers(){
    this.listPlayers$ = this._playerServ.getAllPlayers()
  }

  ngOnInit(): void {
    this.getAllPlayers();
  }
  getImageByNameRank(rank : Ranks){
    return this._playerServ.getImageByNameRank(rank);
  }

  getImagePlateformByName(plateform: Plateforms) {
    return this._playerServ.getImagePlateformByName(plateform);
  }
}
