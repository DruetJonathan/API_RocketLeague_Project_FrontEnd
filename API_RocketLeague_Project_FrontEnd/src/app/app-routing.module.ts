import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HomeComponent} from "./components/home/home.component";
import {AddPlayerComponent} from "./components/player/add-player/add-player.component";
import {SeeAllPlayersComponent} from "./components/player/see-all-players/see-all-players.component";
import {ModifyPlayerComponent} from "./components/modify-player/modify-player.component";

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"player/add",component:AddPlayerComponent},
  {path:"player/seeAllPlayers",component:SeeAllPlayersComponent},
  {path:"player/modify/:id",component:ModifyPlayerComponent},
  {path:"notFound",component:NotFoundComponent},
  {path:"**",component:NotFoundComponent,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
