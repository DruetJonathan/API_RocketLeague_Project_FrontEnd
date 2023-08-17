import {Player} from "./Player";

export interface Team {
  id:number,
  teamName:string,
  players:Player[],
  captain:Player
}
