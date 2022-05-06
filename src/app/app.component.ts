import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'RIA-PreLab';

  clientes = [
    {'documento':'11111111', 'nombre':'Facundo', 'apellido':'Camilo', 'fechaNac':'13/06/1999', 'direccion':'Rivera 419', 'telefono':'099044004' },
  ];

  model:any = {};
  
  addCliente():void{
    this.clientes.push(this.model)
  }

  deleteCliente():void{

  }

  editCliente():void{

  }

  updateCliente():void{

  }
}
