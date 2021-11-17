import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', component: HomeComponent },
]

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MensagemModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
