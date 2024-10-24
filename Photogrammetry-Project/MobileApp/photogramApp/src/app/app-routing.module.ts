import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'take-tour',
    loadChildren: () => import('./take-tour/take-tour.module').then( m => m.TakeTourPageModule)
  },
  {
    path: 'photogrammetry',
    loadChildren: () => import('./photogrammetry/photogrammetry.module').then( m => m.PhotogrammetryPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then( m => m.ProjectsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
