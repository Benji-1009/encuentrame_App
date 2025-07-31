import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonInput,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonText,
  IonList,
  IonCheckbox,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
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
    IonIcon,
    IonLabel,
    IonButton,
    FormsModule,
    IonText,
    NgIf,
    NgFor,
    IonList,
    IonCheckbox,
  ],
})
export class Tab2Page {
  nombreUsuario: string = '';
  apellidoUsuario: string = '';
  correoUsuario: string = '';
  telefonoUsuario: string = '';
  paswordUsuario: string = '';
  platform: string[] = [];
  nuevaPlataforma: string = '';

  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {}

  ngOnInit() {
    // aqui se cargan los datos del usuario desde el servicio
    this.servicioService.getUsers().subscribe((data) => {
      const user = data.find(
        (u: any) =>
          u.name === localStorage.getItem('nombreUsuario') &&
          u.lastname === localStorage.getItem('apellidoUsuario') &&
          u.email === localStorage.getItem('correoUsuario') &&
          u.phone === localStorage.getItem('telefonoUsuario') &&
          u.password === localStorage.getItem('passwordUsuario')
      );
      if (user) {
        this.nombreUsuario = user.name;
        this.apellidoUsuario = user.lastname;
        this.correoUsuario = user.email;
        this.telefonoUsuario = user.phone;
        this.paswordUsuario = user.password;
        this.platform = user.platform || [];
      }
    });
  }

  editarPerfil() {
    //aqui se actualizan los datos del usuario
    const userData = {
      name: this.nombreUsuario,
      lastname: this.apellidoUsuario,
      email: this.correoUsuario,
      phone: this.telefonoUsuario,
    };

    // Se obtiene el ID del usuario desde localStorage
    // y se actualiza la información en el servicio
    const userId = localStorage.getItem('idUsuario');
    this.servicioService.updateUser(userId || '', userData).subscribe(
      () => {
        localStorage.setItem('nombreUsuario', this.nombreUsuario);
        localStorage.setItem('apellidoUsuario', this.apellidoUsuario);
        localStorage.setItem('correoUsuario', this.correoUsuario);
        localStorage.setItem('telefonoUsuario', this.telefonoUsuario);
        localStorage.setItem('platform', this.platform.join(', '));
        alert('Perfil actualizado correctamente');
        this.router.navigate(['../tabs/buscar']);
      },
      (error: any) => {
        console.error('Error al actualizar el perfil:', error);
        alert('Error al actualizar el perfil');
      }
    );
  }
  guardarPlataforma(nuevaPlataforma: string = '') {
    const plataformasStr = localStorage.getItem('platform') || '';
    let plataformas = plataformasStr
      ? plataformasStr.split(',').map((p) => p.trim())
      : [];

    if (nuevaPlataforma && !plataformas.includes(nuevaPlataforma)) {
      plataformas.push(nuevaPlataforma.trim());
    } else if (nuevaPlataforma) {
      alert('La plataforma ya está registrada');
      return;
    }
    // aqui se guarda la plataforma agregada
    localStorage.setItem('platform', plataformas.join(', '));
    this.platform = plataformas;
    this.nuevaPlataforma = ''; // Limpiar el campo de entrada
  }
}
