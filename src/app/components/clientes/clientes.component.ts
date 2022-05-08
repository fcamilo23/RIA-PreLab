/* import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

navegar(){
  this.router.navigate(['/productos']);
}

clientes = [
  {'documento':'DEFAULT','nombre':'DEFAULT','apellido':'DEFAULT','fechaNac':'13/06/1999','direccion':'DEFAULT','telefono':'DEFAULT'}
]
model:any = {};

addCliente():void{
  this.clientes.push(this.model);
}

deleteCliente():void{}

editCliente():void{}



}
*/


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../clases/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegar(){
    this.router.navigate(['/productos']);
  }

  ClientesArray: Cliente[] = [
    {id: 1, documento: "4.727.753-5", nombre: "Facundo", apellido: "Bauza", fecha_nacimiento: "9/9/1995", direccion: "Ruta 3 Km 73", telefono: "094832585"},
    {id: 2, documento: "4.727.753-5", nombre: "Adrian", apellido: "Bauza", fecha_nacimiento: "9/9/1995", direccion: "Ruta 3 Km 73", telefono: "094832585"}
  ];

  selectedCliente: Cliente = new Cliente();

  isEqual(str1: string, str2: string)
  {
      return str1.toUpperCase() === str2.toUpperCase()
  }
  add(){
   /* var x = false;
    for (let aux of this.ClientesArray) {
      if(aux.documento === this.selectedCliente.documento)
        x = true;
    }
    if(x = false){
     
    }*/
    var x = false;
    for (let aux of this.ClientesArray) {
      if(this.isEqual(aux.documento, this.selectedCliente.documento))
        if(aux.documento != ""){
        x = true;
    }
  }
    if(x == false){
      this.selectedCliente.id = this.ClientesArray.length + 1;
      this.ClientesArray.push(this.selectedCliente);
    }
    
    this.selectedCliente = new Cliente();  
  
  }

  openEdit(cliente: Cliente){
    this.selectedCliente = cliente;
  }

  editing(){
    if(this.selectedCliente.id > 0){
      this.selectedCliente = new Cliente();
    }
  }
  limpiar(){
    this.selectedCliente = new Cliente();
  }
  delet(){
    if(confirm("Esta seguro de querer eliminar al Cliente?")){
      this.ClientesArray = this.ClientesArray.filter(x => x != this.selectedCliente);
      this.selectedCliente = new Cliente();
    }
    
  }
}


