import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';

//lazy load modules
const routes: Routes = [ 
  { path: '', component: HomeComponent },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./content/content-routing.module').then((m) => m.ContentRoutingModule),
  },
  //{ path: '', redirectTo: '/home', pathMatch: 'full'},
  //{ path: 'home', component: HomeComponent },
  
  // If no matching route found, go back to home route
 // { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
