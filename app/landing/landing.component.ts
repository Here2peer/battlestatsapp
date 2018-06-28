import { Component, OnInit } from '@angular/core';
import {NewsService} from './news.service';

@Component({
  selector: 'app-landing',
  moduleId: module.id,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  news: any;
  img: any;

  constructor(/*private newsService: NewsService*/) { }

  ngOnInit(): void {
     /*const data = this.newsService.fetch('GET').then( res => {
       this.news = res['appnews']['newsitems'];
       const reg = new RegExp('/(https?:\\/\\/[^\\s]+)/g');
       this.img = reg.exec(this.news['contents']);
     });*/
  }
}
