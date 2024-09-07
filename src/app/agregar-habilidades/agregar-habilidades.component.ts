import { Component, OnInit } from '@angular/core';
import { CampeonService } from '../Services/campeon/campeon.service';
import { Campeon } from '../Modals/Campeon';
import { Habilidad } from '../Modals/habilidad';
@Component({
  selector: 'app-agregar-habilidades',
  templateUrl: './agregar-habilidades.component.html',
  styleUrls: ['./agregar-habilidades.component.css']
})
export class AgregarHabilidadesComponent implements OnInit {
  campeon: Campeon = {
    id: null,
    nombre: '',
    habilidad_base: null,
    descripcion: '',
    habilidad: []
  };

  nuevaHabilidad: Habilidad = {
    id: null,
    nombre: '',
    descripcion: null
  };

  constructor(private campeonService: CampeonService) { }

  ngOnInit(): void {
    // Puedes inicializar el campeón aquí si es necesario
  }

  agregarHabilidad(): void {
    if (this.nuevaHabilidad.nombre) {
      this.campeon.habilidad.push(this.nuevaHabilidad);
      // Resetear `nuevaHabilidad` después de agregar
      this.nuevaHabilidad = {
        id: null,
        nombre: '',
        descripcion: null
      };
    } else {
      // Manejar el caso cuando el nombre de la habilidad está vacío
      console.error('El nombre de la habilidad es obligatorio');
    }
  }

  finalizarAgregacion(): void {
    if (this.campeon.nombre && this.campeon.descripcion) {
      this.campeonService.addCampeon(this.campeon);
      this.campeon = {
        id: null,
        nombre: '',
        habilidad_base: null,
        descripcion: '',
        habilidad: []
      };
    } else {
      // Manejar errores si el nombre o descripción están vacíos
      console.error('Nombre y descripción son obligatorios');
    }
  }
}
