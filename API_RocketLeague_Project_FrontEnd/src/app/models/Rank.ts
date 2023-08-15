import {Ranks} from "./Ranks";
import {Divisions} from "./Divisions";

export interface Rank {
  id:number,
  name:string,
  rank:Ranks,
  division:Divisions
}
