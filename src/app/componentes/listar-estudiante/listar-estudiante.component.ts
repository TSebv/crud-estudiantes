import { Component, OnInit} from '@angular/core';
import { CrudService } from '../../servicio/crud.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-estudiante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-estudiante.component.html',
  styleUrls: ['./listar-estudiante.component.css']
})
export class ListarEstudianteComponent implements OnInit{

  estudiantes: any;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.obtenerEstudiantes().subscribe(
      respuesta => { this.estudiantes = respuesta; }
    );
  }

  borrarRegistro(id: any, iControl: any) {
    // Mostrar mensaje de confirmación
    if (this.confirmarEliminacion(id, iControl)) {
      // Si el usuario confirma, eliminar el estudiante
      this.crudService.borrarEstudiante(id).subscribe(
        respuesta => { this.estudiantes.splice(iControl, 1); }
      );
    }
  }

  confirmarEliminacion(id: any, iControl: any): boolean {
    if (window.confirm('¿Esta seguro de que quieres eliminar este estudiante?')) {
      return true;
    } else {
      return false;
    }
  }
}
