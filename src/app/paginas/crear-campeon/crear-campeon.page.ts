import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/Modals/habilidad';
import { Campeon } from 'src/app/Modals/Campeon';
import { CampeonService } from 'src/app/Services/campeon/campeon.service';

@Component({
  selector: 'app-crear-campeon',
  templateUrl: './crear-campeon.page.html',
  styleUrls: ['./crear-campeon.page.scss'],
})
export class CrearCampeonPage implements OnInit {
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
    // Inicialización si es necesario
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
      console.error('El nombre de la habilidad es obligatorio');
    }
  }

  finalizarAgregacion(): void {
    if (this.campeon.nombre && this.campeon.descripcion) {
      // Puedes realizar alguna acción adicional aquí si es necesario
    } else {
      console.error('Nombre y descripción son obligatorios');
    }
  }

  guardarCampeon(): void {
    if (this.campeon.nombre && this.campeon.descripcion && this.campeon.habilidad.length > 0) {
      this.campeonService.addCampeon(this.campeon);
      console.log('Campeón guardado exitosamente');
      // Resetear el formulario después de guardar
      this.campeon = {
        id: null,
        nombre: '',
        habilidad_base: null,
        descripcion: '',
        habilidad: []
      };
    } else {
      console.error('Nombre, descripción y habilidades son obligatorios');
    }
  }
}
