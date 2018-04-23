import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.loadMap();

    var rotundaTerrace = new google.maps.Marker({
      position: {lat: 51.895261, lng: -2.082719},
      map: this.map,
      title: '16 Rotunda Terrace'
    });

    var theRotunda = new google.maps.Marker({
      position: {lat: 51.894968, lng: -2.082890},
      map: this.map,
      title: 'The Rotunda'
    });

    var queensCircus = new google.maps.Marker({
      position: {lat: 51.896661, lng: -2.080892},
      map: this.map,
      title: 'Queens Circus'
    });

    var holstStatue = new google.maps.Marker({
      position: {lat: 51.897015, lng: -2.078967},
      map: this.map,
      title: 'Holst Statue'
    });

    var townHall = new google.maps.Marker({
      position: {lat: 51.897248, lng:  -2.077762},
      map: this.map,
      title: 'Cheltenham Town Hall'
    });

    var vittoriaWalk = new google.maps.Marker({
      position: {lat: 51.895767, lng:  -2.076550},
      map: this.map,
      title: '1 Vittoria Walk'
    });

    var montpellierVillas = new google.maps.Marker({
      position: {lat: 51.892822, lng:  -2.078820},
      map: this.map,
      title: '6 Montpellier Villas'
    });

    var oxfordHouse = new google.maps.Marker({
      position: {lat: 51.897037, lng: -2.073748},
      map: this.map,
      title: 'Oxford House'
    });

    var cambray = new google.maps.Marker({
      position: {lat: 51.897037, lng: -2.073748},
      map: this.map,
      title: '16 Cambray'
    });

    var assemblyRooms = new google.maps.Marker({
      position: {lat: 51.899756, lng: -2.073128},
      map: this.map,
      title: 'Site of Assembly Rooms'
    });

    var cornExchange = new google.maps.Marker({
      position: {lat: 51.900654, lng: -2.073818},
      map: this.map,
      title: 'Site of Cheltenham Corn Exchange'
    });

    var cheltenhamChapel = new google.maps.Marker({
      position: {lat: 51.902485, lng: -2.078544},
      map: this.map,
      title: 'Cheltenham Chapel'
    });

    var allSaints = new google.maps.Marker({
      position: {lat: 51.902255, lng: -2.063789},
      map: this.map,
      title: 'All Saints Church'
    });

    var holstMuseum = new google.maps.Marker({
      position: {lat: 51.904169, lng: -2.070646},
      map: this.map,
      title: 'Holst Birthplace Museum'
    });

    // Checking current location

    var audiofile = new Audio("./../assets/audio/2. The Rotunda - Intermezzo.mp3");
    this.map.infoWindow = new google.maps.InfoWindow;

    if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition(function(position){

        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        //Distance from current position and Holst Museum
        var distanceFrom = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(pos.lat, pos.lng), holstMuseum.position);

        //If closer than 500m play song
        if(distanceFrom < 500){

          audiofile.play();

        }


      });

    }

  }

  addMarker(){
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    
   
    let content = "<h4>Information!</h4>";         
   
    this.map.addInfoWindow(marker, content);
   
  }

  loadMap(){

    let latLng = new google.maps.LatLng(51.899591, -2.076105);

    let mapOptions = {

      center: latLng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP

    }

    
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

}
