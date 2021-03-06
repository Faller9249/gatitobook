import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
