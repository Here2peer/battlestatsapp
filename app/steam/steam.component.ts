import { Component, OnInit } from '@angular/core';
import {SteamService} from './steam.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-steam',
  templateUrl: './steam.component.html',
  styleUrls: ['./steam.component.css'],
  providers: [SteamService]
})
export class SteamComponent implements OnInit {

  steamuser: any;

  constructor(private steamService: SteamService) {
  }

  ngOnInit() {
    /*this.steamService.getSteamUser().subscribe((data: any) =>  {
      this.steamuser = data;
      console.log(this.steamuser);
    }
    );*/
    try{
      this.steamuser = window.location.search.substr(1);
    } catch(e) {
      this.steamuser = 0;
    }
    console.log(this.steamuser);
  }
}
