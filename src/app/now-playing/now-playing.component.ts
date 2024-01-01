import { Component, OnInit } from '@angular/core';
import { WatchedService } from '../watched.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {
  moviesNowPlaying:any[]=[]
  posterPrefix:string='https://image.tmdb.org/t/p/w500'
  constructor(private _WatchedService:WatchedService){}
ngOnInit(): void {
  this.moviesNowPlay()
}

moviesNowPlay(){
  this._WatchedService.getMoviesNowPlaying().subscribe({
    next:(response)=>{
      this.moviesNowPlaying=response.results
    }
  })
}

}
