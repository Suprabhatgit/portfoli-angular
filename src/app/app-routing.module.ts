import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/home/about/about.component';
// import { ArchiveComponent } from './components/archive/archive.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
