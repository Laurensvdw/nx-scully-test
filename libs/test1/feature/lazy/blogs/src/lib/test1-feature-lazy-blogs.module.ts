import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './pages/blog/blog.component';
import { OtherComponent } from './pages/other/other.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '1', component: BlogComponent },
      { path: ':id', component: OtherComponent },
    ])
  ],
  declarations: [
    BlogComponent,
    OtherComponent
  ],
})
export class Test1FeatureLazyBlogsModule {}
