import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonNav,
  IonButton,
} from '@ionic/angular/standalone';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonNav,
    IonButton,
  ],
})
export class DetailsPage implements OnInit {
  listaResultados: any[] = [];
  detalleSeleccionado: any;
  detalle: any;
  mensaje: any[] = [];
  mensajes: string = '';
  details: string = '';
  numeroAzar: number = 0;
  numero: number = 0;
  nombre: string = '';
  codigo: string = '';

  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {}

  generarNumeroAzar() {
    this.numeroAzar = Math.floor(Math.random() * 11);
    return this.numeroAzar;
  }

  ngOnInit() {
    //###### ESTA SECICIÓN GUARDA LOS DATOS TRAIDOS DE LA PAGINA BUSCAR DONDE SE GUARDA EL
    //###### VALOR SELECCIONADO
    const plataformasStr = localStorage.getItem('platform') || '';
    this.listaResultados = plataformasStr
      ? plataformasStr.split(',').map((p) => ({ plataforma: p.trim() }))
      : [];
    //this.listaResultados = localStorage.getItem('platform');
    console.log(this.listaResultados);

    const selectedIndex = Number(localStorage.getItem('selectedIndex'));
    if (!isNaN(selectedIndex) && this.listaResultados[selectedIndex]) {
      // Aquí tienes el elemento seleccionado
      const detalle = this.listaResultados[selectedIndex];
      console.log('Detalle seleccionado:', detalle);
      // Puedes mostrarlo en el template usando una variable
      this.detalleSeleccionado = detalle;
    }

    //###### EN ESTA SECCIÓN MANDAMOS A LLAMAR LA INFORMACION DE LA API
    //###### QUE CORRESPONDE A LA PLATAFORMA
    this.generarNumeroAzar();
    console.log('Número generado:', this.numeroAzar);
    this.servicioService.getMensaje().subscribe({
      next: (data: any[]) => {
        const ship = data.find((u: any) => u.id === this.numeroAzar);
        if (ship) {
          this.detalle = ship;
          this.details = ship.details;
          this.nombre = ship.name;
          this.codigo = ship.code;
          console.log('ID localizado:', ship.id);
          console.log('Nombre:', this.nombre);
          console.log('Código:', this.codigo);
          console.log('Detalles:', ship.details);
        } else {
          console.error(
            'No se encontró el envío con el id: ,' + this.numeroAzar
          );
          this.details = '';
        }
      },
      error: (error) => {
        console.error('Error al obtener los envíos:', error);
      },
    });
  }

  goBack() {
    this.router.navigate(['../results']);
  }
}
