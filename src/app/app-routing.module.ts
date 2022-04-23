import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './content/home/home.component';

//lazy load modules
const routes: Routes = [ 
  { path: '', component: HomeComponent },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./lazymodule/lazy.module').then((m) => m.LazyModule),
  },
  
  //If no matching route found, go back to home route
 // { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'ignore'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
