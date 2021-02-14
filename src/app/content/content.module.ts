
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ContentRoutingModule} from './content-routing.module'
import { LazyComponent } from './lazycontent/lazy.component';
 
@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  declarations: [LazyComponent]
})
export class ContentModule {}
