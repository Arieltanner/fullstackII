import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './component/user.component';
import { HttpClientModule } from '@angular/common/http';
import { MapaModule } from '../mapa/mapa.module';

const routes: Routes = [
  { path: 'user', component: UserComponent, pathMatch: 'full' }
];


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MapaModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
