import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/Modals/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
    private lista_de_usuarios: Usuario[] = [
      {
        nombre: 'carlos',
        apellido: 'fuentes',
        edad: 25,
        correo: 'car.fuen@gmail.com', 
        username: 'calfue', 
        password: 'pass',
        Rol:[{id: 1, nombre: "administrador"}]    
      }
    }