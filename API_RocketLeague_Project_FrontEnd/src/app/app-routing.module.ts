import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HomeComponent} from "./components/home/home.component";
import {AddPlayerComponent} from "./components/player/add-player/add-player.component";

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"player/add",component:AddPlayerComponent},
  {path:"notFound",component:NotFoundComponent},
  {path:"**",component:NotFoundComponent,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
