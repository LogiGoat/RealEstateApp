import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-foto-slides',
  templateUrl: './foto-slides.component.html',
  styleUrls: ['./foto-slides.component.scss'],
})
export class FotoSlidesComponent implements OnInit {
  @Input() allfotos:any;
  constructor(private modalController:ModalController) { }

  ngOnInit() { }
  cerrar(){

    this.modalController.dismiss({
      'dismissed': true
    });

  }

}
