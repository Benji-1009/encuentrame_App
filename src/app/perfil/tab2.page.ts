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
  email: string = '';

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
        this.email = '';
      },
      (error: any) => {
        console.error('Error al actualizar el perfil:', error);
        alert('Error al actualizar el perfil');
      }
    );
  }
  agregarPlataforma(nuevaPlataforma: string) {
    if (!nuevaPlataforma.trim()) return;

    // 1. Verifica si ya existe en la API
    this.servicioService.getPlatforms().subscribe({
      next: (plataformasApi: any[]) => {
        const existe = plataformasApi.some(
          (p) => p.name.toLowerCase() === nuevaPlataforma.trim().toLowerCase()
        );
        if (existe) {
          alert('La plataforma ya existe');
          return;
        }

        // 2. Si no existe, la agrega en la API
        this.servicioService
          .postCustomPlatform(nuevaPlataforma.trim())
          .subscribe({
            next: (plataformaCreada) => {
              // 3. Actualiza el arreglo local y localStorage
              this.platform.push(nuevaPlataforma.trim());
              localStorage.setItem('platform', this.platform.join(', '));
              this.nuevaPlataforma = '';
              alert('Plataforma agregada correctamente');
            },
            error: () => {
              alert('Error al agregar la plataforma');
            },
          });
      },
      error: () => {
        alert('Error al consultar las plataformas');
      },
    });
  }
}
