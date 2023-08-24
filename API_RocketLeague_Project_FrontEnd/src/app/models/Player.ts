import {Ranks} from "./Ranks";
import {Divisions} from "./Divisions";
import {Rank} from "./Rank";
import {Plateforms} from "./Plateforms";
import {Team} from "./Team";
import {Stat} from "./Stat";

export interface Player {
  id:number,
  pseudo:string,
  ranks: Rank[]
  plateform:Plateforms,
  stats: Stat[],
  teamId:number,
}

export interface PlayerAddForm {
  pseudo:String,
  ranks:Rank[],
  plateform:Plateforms,
  stats: Stat[],
  teamId:number,
}
export interface PlayerSeeAll {
  id:number,
  pseudo:string,
  ranks: Rank[]
  plateform:Plateforms,
  teamId:number,
}
