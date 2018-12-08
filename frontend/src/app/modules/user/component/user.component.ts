import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public listaUsuarios: any;
  public noAccess: String;
  public access: Boolean = false;
  public item: any;

  constructor(private http: HttpClient) {

    try {

      this.http.get('http://localhost:3000/getUsers').subscribe(data => {
        this.listaUsuarios = data;
      }, err => {
        throw err;
      });

    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {
  }

  mostrarMapa(nombre: String, lat: Number, lon: Number) {
    console.log(lat);
    console.log(lon);

    if (lat !== undefined && lon !== undefined) {
      this.access = true;
      this.item = {
        nombre: nombre,
        lat: lat,
        lon: lon
      };
    } else {
      this.noAccess = 'NO TIENE ACCESSO AL MAPA';
    }
  }

}
