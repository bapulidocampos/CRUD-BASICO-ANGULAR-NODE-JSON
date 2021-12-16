import { Component, OnInit } from '@angular/core';
import {Producto, ProductoService} from '../../SERVICES/producto.service';
import {Router, ActivatedRoute} from '@angular/router'; 


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  equipo: Producto={
    id:'',
    nombre:'',
    categoria:'',
    sabor :'',
    precio:'',
    estado:true
    
  };

  constructor(private EquipoService:ProductoService,
              private router:Router,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
           //recuperar el id que nos llega y lo convertimos a string
    const id_entrada = <string>this.activeRoute.snapshot.params.id;
    console.log('id de entrada: '+id_entrada);

    if(id_entrada){
      this.EquipoService.getUnaPersona(id_entrada).subscribe(
        res=>{
          console.log(res);
          this.equipo = res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      );
    }
  }

  modificar()
  {

    this.EquipoService.editPersona(this.equipo.id, this.equipo).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );

    this.router.navigate(['/inicio']);
  }

}
