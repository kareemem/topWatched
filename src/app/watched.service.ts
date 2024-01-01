import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WatchedService {

  constructor(private _HttpClient:HttpClient) { }


  getTrendingMoviesWeek():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=d3a857da1981c3e3a15b0c935dc08274')
  }
  getTrendingMoviesDay():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/day?api_key=d3a857da1981c3e3a15b0c935dc08274')
  }
  getTrendingSeriesWeek():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=d3a857da1981c3e3a15b0c935dc08274')
  }
  getTrendingSeriesDay():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/day?api_key=d3a857da1981c3e3a15b0c935dc08274')
  }
  
  getMoviesNowPlaying():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=d3a857da1981c3e3a15b0c935dc08274')
  }
  getMoviesTopRated():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/movie/top_rated?api_key=d3a857da1981c3e3a15b0c935dc08274')
  }
  getTvTopRated():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/tv/top_rated?api_key=d3a857da1981c3e3a15b0c935dc08274')
  }





}
