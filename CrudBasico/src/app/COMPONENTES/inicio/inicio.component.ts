import { Component, OnInit } from '@angular/core';
import {ProductoService, Producto} from '../../SERVICES/producto.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //varibale
  ListarEquipo: Producto[];

  constructor(private EquipoService:ProductoService, private router:Router) { 
    /*
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    */
  }

  ngOnInit(): void {
    this.listarEquipo();
  }


  listarEquipo()
  {
    this.EquipoService.getPersonas().subscribe(
      res=>{
       // console.log(res.books);

        this.ListarEquipo=<any>res;
      },
      err => 
      console.log(err)
    );
  }


  eliminar(id:string)
  {
    this.EquipoService.deletePersona(id).subscribe(
      res=>{
     console.log(res);
       this.listarEquipo();
       this.router.navigate(['/inicio/'])
      },
      err=>  console.log(err)
      );
  }

  modificar(id:string){
    this.router.navigate(['/edit/'+id]);
  }



}
