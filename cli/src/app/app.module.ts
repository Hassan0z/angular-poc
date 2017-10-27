import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FriendComponent } from './friend/friend.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'friend', component: FriendComponent, pathMatch: 'full'}
      // { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      // { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    ]),
    HttpModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
