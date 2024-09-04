import { Injectable } from '@angular/core';
import { Campeon } from 'src/app/Modals/Campeon';
@Injectable({
  providedIn: 'root'
})
export class CampeonesService {

  lista_de_campeones: Campeon[] = [
    {
      id: 1,
      nombre: "ahri",
      descripcion: "mid",
      pasiva: "Pasiva - Espíritu de la Zorra: Ahri obtiene una carga de hechizo cada vez que lanza una habilidad. Al acumular 3 cargas, su próximo ataque básico inflige daño adicional.",
      habilidad1: "Q - Orbe de Engaño: Ahri lanza un orbe que inflige daño mágico a los enemigos en su camino y regresa a ella, infligiendo daño nuevamente.",
      habilidad2: "W - Fuego del Encantamiento: Ahri lanza una serie de proyectiles que infligen daño mágico y, si impactan a un enemigo, también los inmoviliza durante un breve tiempo.",
      habilidad3: "E - Encantamiento: Ahri lanza un hechizo que inflige daño mágico y, si impacta a un enemigo, lo encanta, haciéndolo caminar lentamente hacia ella durante unos segundos.",
      habilidad4: "R - Despacho Espiritual: Ahri realiza un salto rápido en una dirección, lanzando a la vez tres orbes que infligen daño mágico a los enemigos en su camino. Puede usar esta habilidad hasta tres veces en un corto período de tiempo"
    }
  ]

  constructor() { }

  obtener_campeones(): Campeon[]{
    return this.lista_de_campeones;
  }

  agregarNuevoProducto(campeon: Campeon): void{
    this.lista_de_campeones.push(campeon)
  }
}