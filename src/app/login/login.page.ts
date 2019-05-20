import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
//import { Usuario} from '../../model/usuario';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  
   constructor(private navCtrl: NavController) { }

  Logar() {
    this.navCtrl.navigateForward(['/principal/'])
 }

}



