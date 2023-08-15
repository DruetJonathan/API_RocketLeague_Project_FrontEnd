import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ranks} from "../../../models/Ranks";
import {Plateforms} from "../../../models/Plateforms";
import {Divisions} from "../../../models/Divisions";
import {Rank} from "../../../models/Rank";
import {Router} from "@angular/router";
import {PlayerService} from "../../../services/player.service";
import {Player} from "../../../models/Player";

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent {
  playerForm : FormGroup;
  ranksEnum: string[] = Object.keys(Ranks).filter(key => isNaN(Number(key)));
  divisions: string[] = Object.keys(Divisions).filter(key => isNaN(Number(key)));
  plateforms: string[] = Object.keys(Plateforms).filter(key => isNaN(Number(key)));
  ranks: Rank[] = []; // Tableau pour stocker les informations des rangs et divisions combinées
  constructor(private _fb : FormBuilder,private _router : Router,private _playerService:PlayerService) {
    this.playerForm = this._fb.group({
      id:null,
      pseudo:[null,[Validators.required]],
      ranks:this._fb.array([
        this._fb.group({
          name:"1s",
          rank: ['UNRANKED', Validators.required],
          division: ['UNRANKED', Validators.required]
        }),
        this._fb.group({
          name:"2s",
          rank: ['UNRANKED', Validators.required],
          division: ['UNRANKED', Validators.required]
        }),
        this._fb.group({
           name:"3s",
          rank: ['UNRANKED', Validators.required],
          division: ['UNRANKED', Validators.required]
        })
      ]),
      plateform:["PC",[Validators.required]],
      image:[""],
      wins:[0,[Validators.required,Validators.min(0)]],
      goals:[0,[Validators.required,Validators.min(0)]],
      assists:[0,[Validators.required,Validators.min(0)]],
      mvps:[0,[Validators.required,Validators.min(0)]],
      shots:[0,[Validators.required,Validators.min(0)]],
      saves:[0,[Validators.required,Validators.min(0)]]
    })
  }

  addPlayer(){
    console.log(this.playerForm.value)
    if (this.playerForm.valid){
      console.log(this.playerForm.value)
      this._playerService.addPlayer(this.playerForm.value).subscribe(
      //   (player : Player)=>{
      //     console.log(player)
      // }
      )
      this.playerForm.reset();
    }else{
      console.log("error")
      console.log(this.playerForm)
      this.playerForm.markAllAsTouched()
    }
  }

  protected readonly Ranks = Ranks;
}
