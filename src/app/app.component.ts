import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'customtheme';
  themeName:string = "dark";
  @ViewChild("themechange") themeChange:ElementRef;
  constructor(){

  }

  toggle(){
    this.themeChange.nativeElement.attributes.theme.value = this.themeChange.nativeElement.attributes.theme.value == "dark"?"light":"dark"
  }
}
