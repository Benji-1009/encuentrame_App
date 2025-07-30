import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import {
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonButton,
  IonText,
} from '@ionic/angular/standalone';
import {
  triangle,
  ellipse,
  square,
  homeOutline,
  homeSharp,
  star,
  personSharp,
  personCircleOutline,
  informationSharp,
  searchSharp,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
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
    IonAvatar,
    IonButton,
    FormsModule,
    IonText,
    NgIf,
  ],
})
export class BuscarPage {
  platform: string = '';
  nombreUsuario: string = '';
  email: string = '';

  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {
    addIcons({
      triangle,
      ellipse,
      square,
      homeSharp,
      homeOutline,
      star,
      personCircleOutline,
      personSharp,
      informationSharp,
      searchSharp,
    });
  }

  ngOnInit() {
    this.nombreUsuario = localStorage.getItem('nombreUsuario') || '';
  }

  buscarPlataformas() {
    const correoLogin = localStorage.getItem('correoUsuario');
    if (this.email !== correoLogin) {
      alert('Ese correo no lo tienes registrado');
      return;
    } else {
      this.servicioService.getUsers().subscribe({
        next: (data) => {
          //console.log(data);
          const user = data.find((u: any) => u.email === this.email);
          if (user) {
            if (user.platforms !== '') {
              this.platform = user.platforms;
            } else {
              this.platform = 'No hay plataformas registradas';
            }
            localStorage.setItem('platform', user.platforms);
            alert('Si tienes paquetes a rastrear');
            this.router.navigate(['../results']);
          } else {
            alert('Correo no encontrado');
          }
        },
        error: (error) => {
          console.error('Error al buscar plataformas:', error);
        },
      });
    }
  }
}
