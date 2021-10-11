import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'about',
        loadChildren: () => import('./about/about.module')
          .then(m => m.AboutModule)
      },
      {
        path: 'blogs',
        // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
        loadChildren: () => import('@test/test1/feature/lazy/blogs')
          .then(m => m.Test1FeatureLazyBlogsModule)
      }
    ]),
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
