import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../components/header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {MenubarModule} from "primeng/menubar";
import {DropdownModule} from "primeng/dropdown";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MenubarModule,
    DropdownModule,
    ButtonModule,

  ],
  exports:[
    HttpClientModule,
    FormsModule,
    MenubarModule,
    DropdownModule,
    ButtonModule,

  ]
})
export class SharedModule { }
