import { Component, ElementRef, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { environment } from './../../environments/environment';
import { ModalController } from '@ionic/angular';
import { DetalleGeneralComponent } from './../componentes/detalle-general/detalle-general.component';
import { FiltersComponent } from '../componentes/filters/filters.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{
  @ViewChild('mapCanvas', { static: true }) mapElement: ElementRef;
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
    @Inject(DOCUMENT) 
    private doc: Document,
    private modalController:ModalController
  ) {  }

  async ngAfterViewInit(){
    const appEl = this.doc.querySelector('ion-app');
    let map:any;

    const googleMaps = await getGoogleMaps( environment.apiKeyMaps );
    const mapEle = this.mapElement.nativeElement;

    map = new googleMaps.Map(
      mapEle, 
      {
        center: { "lat": 13.677914, "lng": -88.8183847 },
        zoom: 8,
        styles: null
      }
    );

    googleMaps.event.addListenerOnce(
      map, 
      'idle', 
      () => {
        mapEle.classList.add('show-map');
      }
    );

    this.puntos.forEach(
      (markerData: any) => {
        const infoWindow = new googleMaps.InfoWindow({
          content: `<h5>${markerData.name}</h5>`
        });
        const marker = new googleMaps.Marker(
          {
            position: markerData,
            map,
            title: markerData.name,
            label: 
            {
              text:markerData.precioK,
              fontSize:'9px',
              fontWeight:'bolder'
            }

          }
        );
        marker.addListener(
          'click', 
          () =>{
            //infoWindow.open(map, marker);
            this.mostrarModal1(markerData);
          }
        );
      }
    );
    /*
    googleMaps.event.addListener(
      map, 
      'click', 
      function(event){
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        console.log(`Latitud: ${lat}`);
        console.log(`Longitud: ${lng} `);
        const marker = new googleMaps.Marker(
          {
            position: {
                "lat": lat,
                "lng": lng
              },
            map,
            title: "Marcador de click"
          }
        );
      }
    );

    const observer = new MutationObserver(
      (mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            const el = mutation.target as HTMLElement;
            if (map) {
              map.setOptions({styles: []});
            }
          }
        });
      }
    );
    observer.observe(
      appEl, 
      {
        attributes: true
      }
    );
  */
  }
  

  async mostrarModal1(info:any) {
    const modal = await this.modalController.create({
      component: DetalleGeneralComponent,
      componentProps: {
        'todo': info
      },
      cssClass:'modal1'
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

  
}

function getGoogleMaps(apiKey: string): Promise<any> {
  const win = window as any;
  const googleModule = win.google;
  if (googleModule && googleModule.maps){
    return Promise.resolve(googleModule.maps);
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.31`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      const googleModule2 = win.google;
      if (googleModule2 && googleModule2.maps) {
        resolve(googleModule2.maps);
      } else {
        reject('google maps no esta disponible');
      }
    };
  });
}
