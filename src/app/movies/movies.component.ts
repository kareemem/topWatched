import { Component, OnInit } from '@angular/core';
import { WatchedService } from '../watched.service';
import { IMove } from './interfices/i-move';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  trendingMovies:IMove[]=[]
  posterPrefix:string='https://image.tmdb.org/t/p/w500'
  date:any=''
  constructor(private _WatchedService:WatchedService){}

ngOnInit(): void {
this.moviesWeek()

this.date=document.querySelector('.change')

}


chan(){
  if(this.date.textContent==' month '){
    this.date.innerHTML=' day '
    this.moviesDay()

  }else if(this.date.textContent==' day '){
    this.date.innerHTML=' month '
    this.moviesWeek()

  }
}



moviesWeek(){
  this._WatchedService.getTrendingMoviesWeek().subscribe({
      next:(response)=>{
        this.trendingMovies=response.results
    },
})
}
moviesDay(){
  this._WatchedService.getTrendingMoviesDay().subscribe({
      next:(response)=>{
        this.trendingMovies=response.results
    },
})
}

}
