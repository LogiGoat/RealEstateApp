import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InfoCompletaComponent } from './../info-completa/info-completa.component';

@Component({
  selector: 'app-detalle-general',
  templateUrl: './detalle-general.component.html',
  styleUrls: ['./detalle-general.component.scss'],
})
export class DetalleGeneralComponent implements OnInit {
  @Input() todo: any;
  constructor( private modalController:ModalController) { }
  ngOnInit() {
    //document.getElementById("foto").setAttribute("src",this.todo["url-foto-principal"]);
  }

  cerrar(){

    this.modalController.dismiss({
      'dismissed': true
    });

  }

  async mostrarModal2() {
    const modal = await this.modalController.create({
      component: InfoCompletaComponent,
      componentProps: {
        'todo2': this.todo
      }
    });
    return await modal.present();
  }

  like(){
    console.log("like");
    let elem = document.querySelector('ion-fab-button');
    let color = elem.style.getPropertyValue('--background');
    if(color == 'transparent'){
      elem.style.setProperty('--background', 'red');
    }
    else{
      elem.style.setProperty('--background', 'transparent');
    }
  }
}
