import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Divisions} from "../../../models/Divisions";
import {Plateforms} from "../../../models/Plateforms";
import {Rank} from "../../../models/Rank";
import {ActivatedRoute, Router} from "@angular/router";
import {PlayerService} from "../../../services/player.service";
import {TeamService} from "../../../services/team.service";
import {TeamAddFormDTO} from "../../../models/Team";
import {Ranks} from "../../../models/Ranks";
import {PlayerAddForm} from "../../../models/Player";
import {Stat} from "../../../models/Stat";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-modify-player',
  templateUrl: './modify-player.component.html',
  styleUrls: ['./modify-player.component.scss']
})
export class ModifyPlayerComponent implements OnInit {
  playerForm: FormGroup;
  ranksEnum: string[] = Object.keys(Ranks).filter(key => isNaN(Number(key)));
  divisions: string[] = Object.keys(Divisions).filter(key => isNaN(Number(key)));
  plateforms: string[] = Object.keys(Plateforms).filter(key => isNaN(Number(key)));
  idUrl!: string | null;
  ranks: Rank[] = []; // Tableau pour stocker les informations des rangs et divisions combinées
  constructor(private _fb: FormBuilder, private _router: Router,
              private _playerService: PlayerService, private _teamService: TeamService,
              private _activeRoute: ActivatedRoute) {
    this.playerForm = this._fb.group({
      id: null,
      pseudo: [null, [Validators.required]],
      ranks: this._fb.array([
        this._fb.group({
          name: "1s",
          rank: ['UNRANKED', Validators.required],
          division: ['UNRANKED', Validators.required]
        }),
        this._fb.group({
          name: "2s",
          rank: ['UNRANKED', Validators.required],
          division: ['UNRANKED', Validators.required]
        }),
        this._fb.group({
          name: "3s",
          rank: ['UNRANKED', Validators.required],
          division: ['UNRANKED', Validators.required]
        })
      ]),
      plateform: ["PC", [Validators.required]],
      stats: this._fb.group({
        wins: [0, [Validators.required, Validators.min(0)]],
        goals: [0, [Validators.required, Validators.min(0)]],
        assists: [0, [Validators.required, Validators.min(0)]],
        mvps: [0, [Validators.required, Validators.min(0)]],
        shots: [0, [Validators.required, Validators.min(0)]],
        saves: [0, [Validators.required, Validators.min(0)]],
        dateInserted: new Date(),
      }),
      teamId: [null, [Validators.required]]
    })
  }

  modifyPlayer() {
    console.log(this.playerForm.value)
    if (this.playerForm.valid) {
      console.log(this.playerForm.value)
      this._playerService.modify(this.playerForm.value, this.playerForm.get("id")?.value).subscribe(
        //   (player : Player)=>{
        //     console.log(player)
        // }
      )
      this._router.navigateByUrl("/player/seeAllPlayers")
    } else {
      console.log("error")
      console.log(this.playerForm)
      this.playerForm.markAllAsTouched()
    }
  }

  listOfTeams: TeamAddFormDTO[] = [];

  getAllTeam() {
    this._teamService.getAllTeams().subscribe(
      (teams) => {
        console.log(teams)
        this.listOfTeams = teams;
        this.playerForm.patchValue({
          teamId: teams.filter(team => team.teamName == 'None')[0].id

        })
      }
    )
  }

  currentPlayerSubject: BehaviorSubject<PlayerAddForm> = new BehaviorSubject<PlayerAddForm>({} as PlayerAddForm);
  currentPlayer$: Observable<PlayerAddForm> = this.currentPlayerSubject.asObservable();
  ngOnInit(): void {
    this.idUrl = this._activeRoute.snapshot.paramMap.get('id');
    if (typeof this.idUrl === "string") {
      this._playerService.getPlayer(parseInt(this.idUrl, 10)).subscribe(
        (player) => {
          // this.currentPlayerSubject.next(player);
          console.log('player', player)
          this.playerForm.patchValue({
            stats:{
              wins: player.stats[0].wins
            }
          })
          console.log(player.stats[0].wins)
          this.getAllTeam()
        }
      )
    }
  }
}
