import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent,IonInput, IonItem,IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
  standalone: true,
 imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCardContent, IonCard, IonInput, IonItem, IonLabel, IonButton],
})
export class RecuperarPage {

  constructor() { }


}
