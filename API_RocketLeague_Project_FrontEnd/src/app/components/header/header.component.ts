import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  menuItems: MenuItem[] = [];
  ngOnInit() {
    this.menuItems = [
      {
        label: 'Player',
        icon:'pi pi-user',
        items: [
          { label: 'Add player', routerLink: '/player/add',icon:'pi pi-plus' },
          { label: 'See All players', routerLink: '/player/seeAllPlayers',icon:'pi pi-search' }
        ]
      }
    ];
  }
}
