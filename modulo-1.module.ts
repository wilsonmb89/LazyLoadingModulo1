import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modulo1Pagina1Component } from './modulo1-pagina1/modulo1-pagina1.component';
import { Modulo1Pagina2Component } from './modulo1-pagina2/modulo1-pagina2.component';
import { Modulo1Pagina3Component } from './modulo1-pagina3/modulo1-pagina3.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'm1-page-1', pathMatch: 'full'},
  { path: 'm1-page-1', component: Modulo1Pagina1Component},
  { path: 'm1-page-2', component: Modulo1Pagina2Component},
  { path: 'm1-page-3', component: Modulo1Pagina3Component}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    Modulo1Pagina1Component,
    Modulo1Pagina2Component,
    Modulo1Pagina3Component
  ]
})
export class Modulo1Module { }
