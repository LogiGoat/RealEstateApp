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
  constructor( private modalCtrl:ModalController) { }
  ngOnInit() {
    document.getElementById("foto").setAttribute("src",this.todo["url-foto-principal"]);
  }

  cerrar(){

    this.modalCtrl.dismiss({
      'dismissed': true
    });

  }

  async mostrarModal2() {
    const modal = await this.modalCtrl.create({
      component: InfoCompletaComponent,
      componentProps: {
        'todo2': this.todo
      }
    });
    return await modal.present();
  }



}
