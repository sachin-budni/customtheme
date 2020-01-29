import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './component/first/first.component';
import { ThreeComponent } from './component/three/three.component';
import { Routes, RouterModule } from '@angular/router';

const route:Routes= [
  {
    path:"",component:FirstComponent
  },
  {
    path:":id",component:ThreeComponent
  }
]

@NgModule({
  declarations: [FirstComponent, ThreeComponent],
  imports: [
    CommonModule,RouterModule.forChild(route)
  ]
})
export class FirstModule { }
