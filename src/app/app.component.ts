import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tailwind-starter';
  menuIsOpen = false;
  navIsOpen = false;

  menutoggle(){
    (this.menuIsOpen === false) ? this.menuIsOpen = true : this.menuIsOpen = false
  }
  navtoggle(){
    (this.navIsOpen === false) ? this.navIsOpen = true : this.navIsOpen = false
  }
}
