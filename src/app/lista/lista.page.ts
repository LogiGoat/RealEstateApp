import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InfoCompletaComponent } from './../componentes/info-completa/info-completa.component';
import { FiltersComponent } from '../componentes/filters/filters.component';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  puntos = [
    {
      "name": "Sonsonate",
      "lat": 13.6984177,
      "lng": -89.2223759,
      "foto":"https://i.pinimg.com/originals/59/8f/4f/598f4ff8ecbd39365ba659845551e28b.jpg",
      "direccion":"Col Angélica 16 Av Nte No 1-7A, Sonsonate",
      "fotos":[
        {"url":"https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
      ],
      "precio":"$100,000",
      "precioK":"100K"
    },
    {
      "name": "San Salvador",
      "lat": 13.8423378,
      "lng": -88.8587223,
      "foto":"https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "direccion":"Col Centro América Cl San Antonio Abad No 1921, San Salvador",
      "fotos":[
        {"url":"https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
      ],
      "precio":"$300,000",
      "precioK":"300K"
    },
    {
      "name": "San Miguel",
      "lat": 13.636342,
      "lng": -88.787075,
      "foto":"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "direccion":"Bo El Calvario 2 Av Sur No 402-A Ent 7 Y 5 Cl Ote, San Miguel",
      "fotos":[
        {"url":"https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
      ],
      "precio":"$500,000",
      "precioK":"500K"
    }
  ];
  
  constructor(
    private modalController: ModalController ) { }


  ngOnInit() {
  }

  async mostrarModal2(todo:any) {

    const modal = await this.modalController.create({
      component: InfoCompletaComponent,
      componentProps: {
        'todo2': todo
      }
    });
    return await modal.present();
  }

  async mostrarModalFilters() {
    const modal = await this.modalController.create({
      component: FiltersComponent,
      cssClass:'filter-modal'
    });
    return await modal.present();
  }


  like(elem : any){

    let color = elem.style.getPropertyValue('--background');
      if(color == 'transparent'){
        elem.style.setProperty('--background', 'red');
      }
      else{
        elem.style.setProperty('--background', 'transparent');
      }
  }

}
