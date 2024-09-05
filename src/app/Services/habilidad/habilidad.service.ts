import { Injectable } from '@angular/core';
import { Habilidad } from 'src/app/Modals/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  lista_de_habilidades: Habilidad[] = [
   { id: 1,
    nombre: " ",
     }
    ]
  constructor() { }
}
