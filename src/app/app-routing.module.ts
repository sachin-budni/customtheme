import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { LayerComponent } from './layer/layer.component';


const routes: Routes = [
  {
    path:"second",component:SecondComponent
  },
  {
    path:"first",component:LayerComponent,loadChildren:()=>{
      return import("./first/first.module").then(m=>m.FirstModule);
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
