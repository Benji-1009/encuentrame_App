import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton,
  IonList,
  IonCard,
  IonCardContent,
} from '@ionic/angular/standalone';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonItem,
    IonLabel,
    IonButton,
    IonList,
    NgFor,
    IonCard,
    IonCardContent,
  ],
})
export class ResultsPage {
  name: string = '';
  platform: string = '';
  email: string = '';
  listaResultados: any[] = [];
  numero: number = 0;

  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {}

  ngOnInit() {
    const plataformasStr = localStorage.getItem('platform') || '';
    this.listaResultados = plataformasStr
      ? plataformasStr.split(',').map((p) => ({ plataforma: p.trim() }))
      : [];
    console.log(this.listaResultados);
    /* JSON.parse(localStorage.getItem('platform') || '[]').forEach(
      (element: any) => {
        this.listaResultados = element;
      }
    ); */
    /* JSON.parse(localStorage.getItem('listaResultados') || '[]').forEach(
      (element: any) => {
        this.listaResultados.push({
          nombre: element.nombre,
          email: element.email,
          plataforma: element.plataforma,
          fecha: element.fecha,
          hora: element.hora,
        });
      }
    ); */
  }

  viewDetail(index: number) {
    localStorage.setItem('selectedIndex', index.toString());
    this.router.navigate(['../details']);
  }

  exit() {
    console.clear();
    localStorage.clear();
    document.cookie.split(';').forEach((cookie) => {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    });
    this.router.navigate(['../login']);
    alert('Cerrar sesión');
  }

  goBack() {
    this.router.navigate(['../tabs/buscar']);
  }
}
