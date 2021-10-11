import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { About1Component } from './pages/about1/about1.component';
import { About2Component } from './pages/about2/about2.component';
import { About3Component } from './pages/about3/about3.component';
import { RouterModule } from '@angular/router';
import { OtherComponent } from './pages/other/other.component';

@NgModule({
  declarations: [
    About1Component,
    About2Component,
    About3Component,
    OtherComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '1', component: About1Component },
      { path: '2', component: About2Component },
      { path: '3', component: About3Component },
      { path: ':id', component: OtherComponent }
    ])
  ]
})
export class AboutModule { }
