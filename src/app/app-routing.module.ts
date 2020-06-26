import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GitFinderComponent} from './pages/git-finder/git-finder.component';
import {UrlShortenerComponent} from './pages/url-shortener/url-shortener.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'git-finder'
  },
  {
    path: 'git-finder',
    component: GitFinderComponent
  },
  {
    path: 'url-shortener',
    component: UrlShortenerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
