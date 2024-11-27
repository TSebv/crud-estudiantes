import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../../servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-estudiante',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-estudiante.component.html',
  styleUrl: './agregar-estudiante.component.css'
})
export class AgregarEstudianteComponent implements OnInit{
  formularioDeEstudiantes : FormGroup;

  constructor( public formulario : FormBuilder,
                private crudService : CrudService,
                private ruteador : Router)

{
    this.formularioDeEstudiantes = this.formulario.group({
    nombre:[''],
    edad:[''],
    correo:[''],
    carrera:[''],
    semestre:[''],
    ciudad:['']
  });

}

ngOnInit(): void {}

  enviarDatos() : void {
    this.crudService.agregarEstudiante(this.formularioDeEstudiantes.value).subscribe({
      next: () => {
        alert('Estudiante Agregado con Éxito');
        this.ruteador.navigateByUrl('/listar-estudiante');
      },
      error: error => {
        console.error('Error al Agregar Estudiante:', error);
      }
    });
    
}
}
