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


//  public usuario: any
//  public mensagem: string;
//  public urlBase = "https://localhost:44363/api/MeuPonto/";
 
 

  Logar() {

    this.navCtrl.navigateForward(['/principal/'])

//    if(matricula != undefined && senha != undefined){
//      this.realizarLogin(JSON.stringify({"Matricula": matricula, "Senha": senha  }));
//    }else{
//      this.presentAlert("Favor preencher usuĂ¡rios e senha");
//    }
     
//  }

//  realizarLogin(dados: any): any{
//    this.http.post(this.urlBase + "Login/" + dados , {})
//    .subscribe(res => {
//      this.LogarKronos(res);
//    }, (err) => {
//      this.presentAlert("Matricula ou senha incorretos!");
//    });
//  }

//  async presentAlert(mensagem: string) {
//      const alert = await this.alertCtrl.create({
//      message: mensagem,
//      buttons: ['Dismiss'],
//      cssClass: 'alertClass'
//    });
//    await alert.present(); 
//  }

//  LogarKronos(res:any){
//    this.navCtrl.navigateForward(['/principal/', [res.Nome]])
 }

}
