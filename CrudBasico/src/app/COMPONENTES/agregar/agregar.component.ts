import { Component, OnInit } from '@angular/core';
import {Producto, ProductoService} from '../../SERVICES/producto.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
mensaje='';
public status:string;
  equipo: Producto={
    id:'',
    nombre:'',
    categoria:'',
    sabor :'',
    precio:'',
    estado:true 
    
  };

  constructor(private EquipoService:ProductoService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    if(this.equipo.nombre && this.equipo.categoria && this.equipo.sabor&&this.equipo.precio&&this.equipo.estado){
      console.log(this.equipo);
      this.EquipoService.addPersona(this.equipo).subscribe();
      this.router.navigate(['/inicio']);
      this.status='success';
    }
    else{
    this.status='error';
      
    }
    
  }

}
  