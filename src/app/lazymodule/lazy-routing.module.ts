import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import all the components for which navigation service has to be activated
import { LazyComponent } from './lazy.component';

const routes: Routes = [
  { path: 'lazy', component: LazyComponent },
  {
    path: 'lazy', // If no matching route found, go back to home route
    component: LazyComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {}
