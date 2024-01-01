import { Component, OnInit } from '@angular/core';
import { WatchedService } from '../watched.service';
import { IMove } from '../movies/interfices/i-move';
@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  moviesRated:IMove[]=[]
  posterPrefix:string='https://image.tmdb.org/t/p/w500'
  date:any=''

  constructor(private _WatchedService:WatchedService){}
ngOnInit(): void {
  this.moviesTop()
  this.date=document.querySelector('.change')
}

moviesTop(){
  this._WatchedService.getMoviesTopRated().subscribe({
    next:(response)=>{
      this.moviesRated=response.results
    }
  })
}
tvSeriesTop(){
  this._WatchedService.getTvTopRated().subscribe({
    next:(response)=>{
      this.moviesRated=response.results
    }
  })
}

chan(){
  if(this.date.textContent==' movies '){
    this.date.innerHTML=' TV Series '
    this.tvSeriesTop()

  }else if(this.date.textContent==' TV Series '){
    this.date.innerHTML=' movies '
    this.moviesTop()
  }
}

}
