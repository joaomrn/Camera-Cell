import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController, NavController, AlertController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage {

  map: any;
  photo: string = '../assets/icon/usuario2.png';
  
  constructor(
    private camera: Camera, 
    private geolocation: Geolocation, 
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private alertController: AlertController
    ) {
      this.Position()
  }

  //Reponsavel por chamar a camera
  takePicture(): void {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100,
      cameraDirection: 1
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photo = base64Image;
    }, (err) => {
      console.error(err);
    });
  }

  //Limpa a foto que foi tirada
  cleanPhoto(): void {
    this.photo = '../assets/icon/usuario2.png';
  }

  confirmar():void{
    this.presentAlert()
    this.photo = '../assets/icon/usuario2.png'
    this.navCtrl.navigateForward(['/principal/'])
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Ponto registrado com sucesso!!!',
      buttons: ['OK']
    });

    await alert.present();
  }

  //Google Maps
  Position(): void {
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

        const mapOptions = {
          zoom: 18,
          center: position,
          disableDefaultUI: true
        }

        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        const marker = new google.maps.Marker({
          position: position,
          map: this.map
        });

      }).catch((error) => {
        console.log('Erro ao recuperar sua posição', error);
      });
  }

}
