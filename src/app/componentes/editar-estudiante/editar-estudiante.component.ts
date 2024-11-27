import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../../servicio/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-estudiante',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editar-estudiante.component.html',
  styleUrl: './editar-estudiante.component.css'
})
export class EditarEstudianteComponent implements OnInit{
  formularioDeEstudiantes : FormGroup;
  elID : any;

  constructor(  private activeRoute : ActivatedRoute,
                public formulario : FormBuilder,
                private crudService : CrudService,
                private ruteador : Router) 
  {
    this.elID = this.activeRoute.snapshot.paramMap.get('id');
    this.crudService.obtenerEstudiante( this.elID ).subscribe(
      respuesta => {
        this.formularioDeEstudiantes.setValue({
          nombre : respuesta[0]['nombre'],
          edad : respuesta[0]['edad'],
          correo : respuesta[0]['correo'],
          carrera : respuesta[0]['carrera'],
          semestre : respuesta[0]['semestre'],
          ciudad : respuesta[0]['ciudad']
        });
      }
    );

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

  enviarDatos () : void {
    this.crudService.editarEstudiante( this.elID, this.formularioDeEstudiantes.value).subscribe({
      next: () => {
        alert ('Estudiante Editado con Éxito');
        this.ruteador.navigateByUrl( '/listar-estudiante' );
      },
      error: error => {
        console.error('Error al Editar Estudiante', error);
      }
    });
}
}
