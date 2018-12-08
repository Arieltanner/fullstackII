import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './component/mapa.component';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';


const routes: Routes = [
  { path: 'mapa', component: MapaComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [MapaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBdky9PMmE45OFZORud3CNsTwx2FNzp9uw'
    })
  ],
  exports: [MapaComponent]
})
export class MapaModule { }
