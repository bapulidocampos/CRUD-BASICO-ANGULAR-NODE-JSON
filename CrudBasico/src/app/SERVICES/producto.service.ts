import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url='/api';
  constructor(private http: HttpClient) { }


  //get productos
  getPersonas()
  {
    return this.http.get(this.url);
  }


  //get un producto
  getUnaPersona(id:string){
    return this.http.get(this.url+'/'+id);
  }


  //agregar producto
  addPersona(equipo:Producto)
  {
    return this.http.post(this.url, equipo);
  }


  //eliminar producto
  deletePersona(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar producto
  editPersona(id:string, equipo:Producto){
    return this.http.put(this.url+'/'+id, equipo);
  }

}


export interface Producto{
  id?:string;
  nombre:string;
  categoria:string;
  sabor :string,
  precio :string,
  estado :boolean
    
}
  