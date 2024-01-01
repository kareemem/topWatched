import { WatchedService } from './../watched.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IMove } from '../movies/interfices/i-move';
import { ISeries } from '../i-series';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  trendingWeekMovies:IMove[]=[]
  trendingDayMovies:IMove[]=[]
  moviesRated:IMove[]=[]
  tvRated:any[]=[]
  trendingWeekSeries:ISeries[]=[]
  trendingDaySeries:ISeries[]=[]

  posterPrefix:string='https://image.tmdb.org/t/p/w500'

  constructor(private _WatchedService:WatchedService){}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this.moviesWeek()
    this.moviesDay()
    this.seriesWeek()
    this.seriesDay()
    this.moviesTop()
    this.tvTop()
  }

  moviesWeek(){
    this._WatchedService.getTrendingMoviesWeek().subscribe({
        next:(response)=>{
          this.trendingWeekMovies=response.results
      },
  })
  }
  moviesDay(){
    this._WatchedService.getTrendingMoviesDay().subscribe({
        next:(response)=>{
          this.trendingDayMovies=response.results
      },
  })

}
//
seriesWeek(){
  this._WatchedService.getTrendingSeriesWeek().subscribe({
      next:(response)=>{
        this.trendingWeekSeries=response.results
    },
})
}
seriesDay(){
  this._WatchedService.getTrendingSeriesDay().subscribe({
      next:(response)=>{
        this.trendingDaySeries=response.results
    },
})
}
moviesTop(){
  this._WatchedService.getMoviesTopRated().subscribe({
      next:(response)=>{
        this.moviesRated=response.results
    },
})
}
tvTop(){
  this._WatchedService.getTvTopRated().subscribe({
      next:(response)=>{
        this.tvRated=response.results
    },
})
}


}
