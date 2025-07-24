import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, IonAvatar, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular';
import { triangle, ellipse, square, homeOutline, homeSharp, star, personSharp, personCircleOutline, informationSharp, searchSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';

NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCardContent, IonCard, IonInput, IonItem, IonList, IonFooter, IonTabs, IonTabBar,IonTabButton, IonIcon, IonLabel, IonAvatar, IonButton]

})
export class BuscarPage {


  constructor() { 
        addIcons({ triangle, ellipse, square, homeSharp, homeOutline, star, personCircleOutline, personSharp, informationSharp, searchSharp });
    
  }


}
