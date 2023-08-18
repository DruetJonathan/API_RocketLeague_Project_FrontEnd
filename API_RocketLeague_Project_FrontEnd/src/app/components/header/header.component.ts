import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      { label: 'Add Player', routerLink: '/player/add' },
      { label: 'See All Players', routerLink: '/player/seeAllPlayers' },
      { label: 'Login', routerLink: '/' },
      { label: 'Register', routerLink: '/' }
    ];
  }
}
