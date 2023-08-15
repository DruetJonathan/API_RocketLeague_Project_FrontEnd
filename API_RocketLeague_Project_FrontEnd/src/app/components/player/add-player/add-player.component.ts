import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ranks} from "../../../models/Ranks";
import {Plateforms} from "../../../models/Plateforms";

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent {
  playerForm : FormGroup;
  ranks: string[] = Object.keys(Ranks).filter(key => isNaN(Number(key)));
  plateforms: string[] = Object.keys(Plateforms).filter(key => isNaN(Number(key)));
  constructor(private _fb : FormBuilder) {
    this.playerForm = this._fb.group({
      pseudo:[null,[Validators.required]],
      ranks:[null,[Validators.required]],
      plateform:[null,[Validators.required]],
      image:[null,[Validators.required,Validators.min(0)]],
      wins:[null,[Validators.required,Validators.min(0)]],
      goals:[null,[Validators.required,Validators.min(0)]],
      assists:[null,[Validators.required,Validators.min(0)]],
      mvps:[null,[Validators.required,Validators.min(0)]],
      shots:[null,[Validators.required,Validators.min(0)]],
      saves:[null,[Validators.required,Validators.min(0)]]
    })
  }

  addPlayer(){
    console.log(this.playerForm)
  }

  protected readonly Ranks = Ranks;
}
