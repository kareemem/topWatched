import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { TopRatedComponent } from './top-rated/top-rated.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'movies',component:MoviesComponent},
  {path:'home',component:MainComponent},
  {path:'series',component:SeriesComponent},
  {path:'topRated',component:TopRatedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
