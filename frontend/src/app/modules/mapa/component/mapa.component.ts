import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  @Input() item: any;

  public lat: Number = -34.6036844;
  public lon: Number = -58.381559100000004;
  public nombre: String;

  constructor() { }

  ngOnInit() {


    this.lat = this.item.lat;
    this.lon = this.item.lon;
    this.nombre = this.item.nombre;

    console.log(this.lat);
    console.log(this.lon);
  }

}
