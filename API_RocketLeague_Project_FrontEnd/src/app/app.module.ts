import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AddPlayerComponent } from './components/player/add-player/add-player.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SeeAllPlayersComponent } from './components/player/see-all-players/see-all-players.component';
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {DropdownModule} from "primeng/dropdown";

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        HomeComponent,
        HeaderComponent,
        AddPlayerComponent,
        SeeAllPlayersComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
    providers: [],
    exports: [
        HeaderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
