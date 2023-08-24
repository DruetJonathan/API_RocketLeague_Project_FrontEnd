import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player, PlayerAddForm, PlayerSeeAll} from "../models/Player";
import {Ranks} from "../models/Ranks";
import {Plateforms} from "../models/Plateforms";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private basicUrl: string = "http://localhost:8080/";

  constructor(private _client: HttpClient) {
  }

  addPlayer(playerAddForm: PlayerAddForm): Observable<Player> {
    console.log(this.basicUrl + "player/add")
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._client.post<Player>(this.basicUrl + "player/add", playerAddForm, {headers});
  }

  getAllPlayers(): Observable<PlayerSeeAll[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._client.get<PlayerSeeAll[]>(this.basicUrl + 'players/see', { headers });
  }

  getImageByNameRank(rankName:string) {
    switch (rankName) {
      case Ranks.UNRANKED:
        return '/assets/images/logo/unranked.png';
      case Ranks.BRONZE_I:
        return '/assets/images/logo/Bronze1_rank_icon.png';
      case Ranks.BRONZE_II:
        return '/assets/images/logo/Bronze2_rank_icon_.png';
      case Ranks.BRONZE_III:
        return '/assets/images/logo/Bronze3_rank_icon.png';
      case Ranks.SILVER_I:
        return '/assets/images/logo/Silver1_rank_icon.png';
      case Ranks.SILVER_II:
        return '/assets/images/logo/Silver2_rank_icon.png';
      case Ranks.SILVER_III:
        return '/assets/images/logo/Silver3_rank_icon.png';
      case Ranks.GOLD_I:
        return '/assets/images/logo/Gold1_rank_icon.png';
      case Ranks.GOLD_II:
        return '/assets/images/logo/Gold2_rank_icon.png';
      case Ranks.GOLD_III:
        return '/assets/images/logo/Gold3_rank_icon.png';
      case Ranks.PLATINUM_I:
        return '/assets/images/logo/Platinum1_rank_icon.png';
      case Ranks.PLATINUM_II:
        return '/assets/images/logo/Platinum2_rank_icon.png';
      case Ranks.PLATINUM_III:
        return '/assets/images/logo/Platinum3_rank_icon.png';
      case Ranks.DIAMOND_I:
        return '/assets/images/logo/Diamond1_rank_icon.png';
      case Ranks.DIAMOND_II:
        return '/assets/images/logo/Diamond2_rank_icon.png';
      case Ranks.DIAMOND_III:
        return '/assets/images/logo/Diamond3_rank_icon.png';
      case Ranks.CHAMPION_I:
        return '/assets/images/logo/Champion1_rank_icon.png';
      case Ranks.CHAMPION_II:
        return '/assets/images/logo/Champion2_rank_icon.png';
      case Ranks.CHAMPION_III:
        return '/assets/images/logo/Champion3_rank_icon.png';
      case Ranks.GRAND_CHAMPION_I:
        return '/assets/images/logo/Grand_champion1_rank_icon.png';
      case Ranks.GRAND_CHAMPION_II:
        return '/assets/images/logo/Grand_champion2_rank_icon.png';
      case Ranks.GRAND_CHAMPION_III:
        return '/assets/images/logo/Grand_champion3_rank_icon.png';
      case Ranks.SUPERSONIC_LEGEND:
        return '/assets/images/logo/Supersonic_Legend_rank_icon.png';
      default:
        return ''; // Gestion de la valeur inconnue
    }
  }

  getImagePlateformByName(plateform: Plateforms) {
    switch (plateform) {
      case Plateforms.PC:
        return '/assets/images/logo/epic.png';
      case Plateforms.XBOX_ONE:
        return '/assets/images/logo/xbox.png';
      case Plateforms.PLAYSTATION_4:
        return '/assets/images/logo/ps.png';
      case Plateforms.NINTENDO_SWITCH:
        return '/assets/images/logo/nintendo.png';
      default:
        return '';
    }
  }

  delete(currentDeleteId: number) {
    console.log(currentDeleteId)
    return this._client.delete<Player>(this.basicUrl + 'player/delete/'+currentDeleteId);
  }
}
