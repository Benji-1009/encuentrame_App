import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCardContent,
    IonCard,
    IonInput,
    IonItem,
    IonLabel,
    IonButton,
    FormsModule,
  ],
})
export class LoginPage {
  //AQUI SE DECLARAN LAS VARIABLES QUE SE VAN A UTILIZAR EN EL LOGIN
  // Y QUE SE VAN A ENVIAR AL SERVICIO Y QUE VIENEN DE LA API
  id: number = 0;
  name: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  platform: string = '';
  plataformas: string[] = [];

  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {}

  login() {
    this.servicioService.getUsers().subscribe({
      next: (data) => {
        //console.log(data);
        const user = data.find(
          (u: any) => u.email === this.email && u.password === this.password
        );
        if (user) {
          this.id = user.id;
          this.name = user.name;
          this.lastname = user.lastname;
          this.email = user.email;
          this.phone = user.phone;
          this.password = user.password;
          this.plataformas = user.platform;
          localStorage.setItem('idUsuario', this.id.toString());
          localStorage.setItem('nombreUsuario', this.name);
          localStorage.setItem('apellidoUsuario', this.lastname);
          localStorage.setItem('correoUsuario', this.email);
          localStorage.setItem('telefonoUsuario', this.phone);
          localStorage.setItem('passwordUsuario', this.password);
          localStorage.setItem('platform', this.platform);

          alert('Inicio de sesión exitoso');
          this.router.navigate(['../tabs/buscar']);
        } else {
          alert('Credenciales incorrectas');
        }
      },
      error: (error) => {
        console.error('Error al obtener los usuarios:', error);
        alert('Error al iniciar sesión');
      },
    });
  }
}
