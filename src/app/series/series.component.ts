import { Component } from '@angular/core';
import { WatchedService } from '../watched.service';
import { ISeries } from '../i-series';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  trendingSeries:ISeries[]=[]
  posterPrefix:string='https://image.tmdb.org/t/p/w500'
  date:any=''
  constructor(private _WatchedService:WatchedService){}

ngOnInit(): void {
this.seriesWeek()

this.date=document.querySelector('.change')

console.log(this.date.textContent);
}


chan(){
  if(this.date.textContent==' month '){
    this.date.innerHTML=' day '
    this.seriesDay()

  }else if(this.date.textContent==' day '){
    this.date.innerHTML=' month '
    this.seriesWeek()

  }
}



seriesWeek(){
  this._WatchedService.getTrendingSeriesWeek().subscribe({
      next:(response)=>{
        this.trendingSeries=response.results
    },
})
}
seriesDay(){
  this._WatchedService.getTrendingSeriesDay().subscribe({
      next:(response)=>{
        this.trendingSeries=response.results
    },
})
}


}
