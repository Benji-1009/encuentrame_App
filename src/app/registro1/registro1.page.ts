import { Component, getPlatform, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
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
  IonIcon,
  IonLabel,
  IonButton,
  IonText,
  IonList,
  IonCheckbox,
} from '@ionic/angular/standalone';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-registro1',
  templateUrl: './registro1.page.html',
  styleUrls: ['./registro1.page.scss'],
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
export class Registro1Page {
  name: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';
  agregarPlataforma: string = '';
  platforms = signal<any[]>([]);
  selectedPlatforms = signal<string[]>([]);

  constructor(
    public servicioService: ServicioService,
    private router: Router
  ) {}

  // AQUI SE MANDA A GUARDAR LOS DATOS DEL USUARIO A LA API
  guardarDatos() {
    if (this.password !== this.confirmPassword)
      return alert('Las contraseñas no coinciden');

    const userData = {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      phone: this.phone,
      password: this.confirmPassword,
      platforms: this.selectedPlatforms(),
    };

    this.servicioService.postUsers(userData).subscribe({
      next: (res) => {
        alert('Registro guardado exitosamente');
        this.router.navigate(['../buscar']);
      },
      error: (error) => alert('El correo ya está registrado'),
    });
  }
  //############################################################

  //AQUI SE MANDA A LLAMAR A LA API PARA OBTENER LAS PLATAFORMAS

  ngOnInit() {
    this.servicioService.getPlatforms().subscribe({
      next: (data) => this.platforms.set(data),
      error: (error) => console.error('Error al extraer datos: ', error),
    });
  }

  //#############################################################

  //AQUI SE SELECCIONAN LAS PLATAFORMS
  onCheckboxChange(platforms: string, checked: boolean) {
    const current = this.selectedPlatforms();
    if (checked) {
      this.selectedPlatforms.set([...current, platforms]);
    } else {
      alert('Selecciona una plataforma');
      return;
      //this.selectedPlatforms.set(current.filter((name) => name !== platforms));
    }
  }
  //#############################################################

  //AQUI SE MANDA A GUARDAR LAS PLATAFORMAS SELECCIONADAS
  /*   guardarSeleccion() {
    // Envía los datos a la API
    this.servicioService
      .postSelectedPlatforms(this.selectedPlatforms())
      .subscribe({
        next: (res) => console.log('Datos guardados', res),
        error: (err) => console.error('Error:', err),
      });
  } */
  //#############################################################

  //AQUI SE MANDA A GUARDAR LOS DATOS DEL USUARIO Y LAS PLATAFORMAS
  // SELECCIONADAS
  enviarDatos() {
    this.guardarDatos();
    //this.guardarSeleccion();

    // Guarda la plataforma personalizada en la otra tabla si el campo no está vacío

    if (this.agregarPlataforma.trim()) {
      getPlatform();
      if (this.platforms().some((p) => p.name === this.agregarPlataforma)) {
        alert('La plataforma ya existe');
        return;
      }
      // Envía la plataforma personalizada a la API
      this.servicioService
        .postCustomPlatform(this.agregarPlataforma)
        .subscribe({
          next: (res) => console.log('Plataforma agregada', res),
          error: (err) => console.error('Error al guardar plataforma', err),
        });
    }
    //#############################################################
  }
}
