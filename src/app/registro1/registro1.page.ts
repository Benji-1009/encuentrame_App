import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent,IonInput, IonItem, IonList, IonFooter, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonButton} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { triangle, ellipse, square, homeOutline, homeSharp, star, personSharp, personCircleOutline, informationSharp, searchSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';


@Component({
  selector: 'app-registro1',
  templateUrl: './registro1.page.html',
  styleUrls: ['./registro1.page.scss'],
  standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCardContent, IonCard, IonInput, IonItem, IonList, IonFooter, IonTabs, IonTabBar,IonTabButton, IonIcon, IonLabel, IonButton
    ],
})
export class Registro1Page implements OnInit {

  constructor() { 
    addIcons({ triangle, ellipse, square, homeSharp, homeOutline, star, personCircleOutline, personSharp, informationSharp, searchSharp });
  }

  ngOnInit() {
  }

}
