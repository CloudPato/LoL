import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
import { Usuario } from 'src/app/Modals/Usuario';
import { UsuariosService } from 'src/app/Services/usuarios/usuarios.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuario: Usuario | undefined;

  constructor(private router: Router, private _usuarioService: UsuariosService) { }

  ngOnInit() {
    const username = this.router.getCurrentNavigation()?.extras?.state?.['usuario'];
    console.log(username)
    this.usuario = this._usuarioService.obtener_info_usuario(username);
    console.log(this.usuario)
  }

  obtenerAdministrador(){
    const esAdministrador = this.usuario?.role.some(rol => rol.nombre == 'administrador');
    return esAdministrador
  }

  

}
