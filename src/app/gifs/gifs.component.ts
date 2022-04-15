import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit, OnDestroy {

  gifs: any[] = [];
  subscription: Subscription = new Subscription;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.getTrendingGifs();
    this.subscription = this.dataservice.getGifs()
    .subscribe((response: any) => {
      this.gifs = response;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
