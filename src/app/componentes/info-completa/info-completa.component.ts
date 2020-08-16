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
    //document.getElementById("foto2").setAttribute("src",this.todo2["url-foto-principal"]);
/*
    let numeroFotos = this.todo2["fotos"].length;

    for(let i = 0; i < numeroFotos; i++){
      let img = document.createElement('img');
      img.src = this.todo2["url-fotos"][i]["url"];
      document.getElementById('extra-fotos').appendChild(img);
    }

    */
    //console.log(this.todo2);
  }

  cerrar(){

    this.modalCtrl.dismiss({
      'dismissed': true
    });

  }

  like(){
    let elem = document.querySelectorAll(".like-button") as NodeListOf<HTMLElement>;

    for(let i = 0; i < elem.length; i++){
      let color = elem[i].style.getPropertyValue('--background');
      if(color == 'transparent'){
        elem[i].style.setProperty('--background', 'red');
      }
      else{
        elem[i].style.setProperty('--background', 'transparent');
      }
    }
  }

}
