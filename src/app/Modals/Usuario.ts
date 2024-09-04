import { Rol } from "./Rol";
export interface Usuario{
    nombre: string;
    apellido: string;
    edad: number;
    correo: string;
    username: string;
    password: string;
    Rol:[]    
}