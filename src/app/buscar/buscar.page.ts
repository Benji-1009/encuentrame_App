import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, IonAvatar, IonButton } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { triangle, ellipse, square, homeOutline, homeSharp, star, personSharp, personCircleOutline, informationSharp, searchSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { TabsPage } from '../tabs/tabs.page';

NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCardContent, IonCard, IonInput, IonItem, IonTabs, IonTabBar,IonTabButton, IonIcon, IonLabel, IonAvatar, IonButton]

})
export class BuscarPage {


  constructor() { 
        addIcons({ triangle, ellipse, square, homeSharp, homeOutline, star, personCircleOutline, personSharp, informationSharp, searchSharp });
    
  }


}
