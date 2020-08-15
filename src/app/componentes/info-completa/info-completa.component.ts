import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-info-completa',
  templateUrl: './info-completa.component.html',
  styleUrls: ['./info-completa.component.scss'],
})
export class InfoCompletaComponent implements OnInit {
  @Input() todo2:any;
  constructor( private modalCtrl:ModalController) { }
  ngOnInit() {
    document.getElementById("foto2").setAttribute("src",this.todo2["url-foto-principal"]);
  }

  cerrar(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}

