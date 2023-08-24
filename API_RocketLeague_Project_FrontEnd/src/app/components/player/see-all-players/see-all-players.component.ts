import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PlayerService} from "../../../services/player.service";
import {Player, PlayerSeeAll} from "../../../models/Player";
import {filter, map, Observable, tap} from "rxjs";
import {Rank} from "../../../models/Rank";
import {Ranks} from "../../../models/Ranks";
import {Plateforms} from "../../../models/Plateforms";
import {TeamService} from "../../../services/team.service";
import {Team, TeamAddFormDTO} from "../../../models/Team";
import {ConfirmationService, ConfirmEventType, MessageService} from "primeng/api";

@Component({
  selector: 'app-see-all-players',
  templateUrl: './see-all-players.component.html',
  styleUrls: ['./see-all-players.component.scss']
})
export class SeeAllPlayersComponent implements OnInit {

  listPlayers$!: Observable<PlayerSeeAll[]>;
  teams!: TeamAddFormDTO[];
  typeRank: string[] = ["Duel Solo", "Doubles", "Trio"]
  divDeleteVisible = false;
  divConfirmationMessage = false;
  isBlurred = false;
  currentDeleteId= 0;
  constructor(private _playerServ: PlayerService, private _teamServ: TeamService) {
  }

  getAllPlayers() {
    this.listPlayers$ = this._playerServ.getAllPlayers()
  }

  ngOnInit(): void {
    this.getAllPlayers();
    this.getAllTeams();
  }

  getImageByNameRank(rank: Ranks) {
    return this._playerServ.getImageByNameRank(rank);
  }

  getImagePlateformByName(plateform: Plateforms) {
    return this._playerServ.getImagePlateformByName(plateform);
  }

  getAllTeams() {
    this._teamServ.getAllTeams().subscribe(teams => {
      this.teams = teams;
      // console.log(teams)
    });
  }

  getTeamNameById(teamId: number): String | undefined {
    // let tmp: string = "";
    // return this._teamServ.getById(teamId).pipe(
    //   map(team => {
    //     return team ? team.teamName : 'Unknown Team';
    //   }));
    // console.log(tmp)
    // return tmp ? tmp : 'Unknown Team';
    return this.teams.find(team => teamId === teamId)?.teamName;
  }

  toogleDeletePopup(id:number,idPlayer:number) {
    this.currentDeleteId = idPlayer;
    this.divDeleteVisible = !this.divDeleteVisible;
    if (id === 1){
      this.toggleDeleteConfirmationMessage();
      this._playerServ.delete(this.currentDeleteId).subscribe(
        ()=>{
          this.getAllPlayers();
          this.getAllTeams();
        }
      );
    }
  }
  toggleDeleteConfirmationMessage(){
    this.divConfirmationMessage = !this.divConfirmationMessage;
  }

  removeBlur() {
    this.divDeleteVisible = false;
    this.divConfirmationMessage = false;
  }

  toggleBlur() {
    this.isBlurred = !this.isBlurred;
  }
}
