import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEstudianteComponent } from './componentes/agregar-estudiante/agregar-estudiante.component';
import { EditarEstudianteComponent } from './componentes/editar-estudiante/editar-estudiante.component';
import { ListarEstudianteComponent } from './componentes/listar-estudiante/listar-estudiante.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'agregar-estudiante'},
    {path: 'agregar-estudiante', component:AgregarEstudianteComponent},
    {path: 'listar-estudiante', component:ListarEstudianteComponent},
    {path: 'editar-estudiante/:id', component:EditarEstudianteComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRountingModule { }
