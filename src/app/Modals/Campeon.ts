import { Habilidad } from "./habilidad";
export interface Campeon{
    id: number;
    nombre: string;
    habilidad_base: Habilidad;
    descripcion: string;
    habilidad: Habilidad[]
}