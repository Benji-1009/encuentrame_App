import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButton, IonCheckbox, IonIcon} from '@ionic/angular/standalone';
import { triangle, ellipse, square, homeOutline, homeSharp, star, personSharp, personCircleOutline, informationSharp, searchSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.page.html',
  styleUrls: ['./registro2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonIcon, IonTitle, IonContent, IonCardContent, IonCard, IonButton, IonCheckbox],
})
export class Registro2Page implements OnInit {

  constructor() {
    addIcons({ triangle, ellipse, square, homeSharp, homeOutline, star, personCircleOutline, personSharp, informationSharp, searchSharp });
   }

  ngOnInit() {
  }

}
