import {Ranks} from "./Ranks";
import {Divisions} from "./Divisions";
import {Rank} from "./Rank";
import {Plateforms} from "./Plateforms";



export interface Player {
  id:number,
  pseudo:string,
  ranks: Rank[]
  plateform:Plateforms,
  image:string,
  wins: number;
  goals: number;
  assists: number;
  mvps: number;
  shots: number;
  saves: number;
}
