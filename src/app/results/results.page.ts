import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { TabsPage } from '../tabs/tabs.page';
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
  IonIcon,
} from '@ionic/angular/standalone';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';

import { addIcons } from 'ionicons';
import { arrowUndoOutline } from 'ionicons/icons';

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
    IonIcon,
  ],
})
export class ResultsPage {
  name: string = '';
  platform: string = '';
  email: string = '';
  password: string = '';
  listaResultados: any[] = [];
  numero: number = 0;

  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {
    addIcons({
      arrowUndoOutline,
    });
  }

  ngOnInit() {
    const plataformasStr = localStorage.getItem('platform') || '';
    this.listaResultados = plataformasStr
      ? plataformasStr.split(',').map((p) => ({ plataforma: p.trim() }))
      : [];
    console.log(this.listaResultados);
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
    this.router.navigate(['../tabs/login']);
    alert('Cerrar sesión');
    this.email = '';
    this.password = '';
  }

  goBack() {
    this.router.navigate(['../tabs/buscar']);
    this.email = '';
  }
}
