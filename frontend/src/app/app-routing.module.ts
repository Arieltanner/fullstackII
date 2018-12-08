import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'prefix', loadChildren: './modules/user/user.module#UserModule' },
  { path: '', pathMatch: 'prefix', loadChildren: './modules/mapa/mapa.module#MapaModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
