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
  cargar:number = 0;


  constructor() { 
        
  }

  ngOnInit(): void {

    localStorage.setItem('key', JSON.stringify(10));
    localStorage.setItem('myArray', JSON.stringify(this.ClientesArray)); 

  }
  /*
  navegar(){
    this.router.navigate(['/productos']);
  }*/

  ClientesArray: Cliente[] = [
    {id: 1, documento: "4.727.753-5", nombre: "Facundo", apellido: "Bauza", fecha_nacimiento: "9/9/1995", direccion: "Ruta 3 Km 73", telefono: "094832585"},
    {id: 2, documento: "4.727.753-5", nombre: "Adrian", apellido: "Bauza", fecha_nacimiento: "9/9/1995", direccion: "Ruta 3 Km 73", telefono: "094832585"}
  ];

  arr: Cliente[] = [];

  LocalStorageArray: Cliente[] = JSON.parse(localStorage.getItem("myArray") || '{}');

  selectedCliente: Cliente = new Cliente();
  
  
  isEqual(str1: string, str2: string)
  {
      return str1.toUpperCase() === str2.toUpperCase()
  }

  addLocalStorage(){
    var array = JSON.parse(localStorage.getItem("myArray") || '{}');
    if(array == '{}'){
      localStorage.setItem('myArray', JSON.stringify(this.ClientesArray));
    }

   
  }
  
  add()
  {
    if(this.selectedCliente.id == null)
    {
      var x = false;
      for (let aux of this.ClientesArray) 
      {
        if(this.isEqual(aux.documento, this.selectedCliente.documento))
          if(aux.documento != "")
          {
            x = true;
          }
      }
      if(x == false)
      {
        if(confirm("Esta seguro de querer guardar el nuevo Cliente?"))
        {
          let x = JSON.parse(localStorage.getItem("key") || '{}');
          x++;
          localStorage.setItem('key', JSON.stringify(x));
          this.selectedCliente.id = x;
          this.ClientesArray.push(this.selectedCliente);

          // Se parsea para poder ser usado en js con JSON.parse :)
          var array = JSON.parse(localStorage.getItem("myArray") || '{}');
          array.push(this.selectedCliente);
          localStorage.setItem('myArray', JSON.stringify(array));
          location.reload();
        }
      }
      this.selectedCliente = new Cliente();  
    }
    else
    {
      if(confirm("Esta seguro de querer editar al Cliente seleccionado?")){
        this.editing();
      }
      
    }
  }

  openEdit(cliente: Cliente){
    this.selectedCliente = cliente;
  }

  editing(){

    var array = JSON.parse(localStorage.getItem("myArray") || '{}');
    
    if(confirm("Esta seguro de que querer Editar al Cliente?")){
      for (const i in array) {
        if (array[i].id == this.selectedCliente.id) {
          array[i].documento = this.selectedCliente.documento;
          array[i].nombre = this.selectedCliente.nombre;
          array[i].apellido = this.selectedCliente.apellido;
          array[i].fecha_nacimiento = this.selectedCliente.fecha_nacimiento;
          array[i].direccion = this.selectedCliente.direccion;
          array[i].telefono = this.selectedCliente.telefono;
  
  
        }
      }
      //array.push(this.selectedCliente);
      localStorage.setItem('myArray', JSON.stringify(array));  
    }
    this.limpiar();
  }
  limpiar(){
    this.selectedCliente = new Cliente();
  }
  delet(){
    if(confirm("Esta seguro de querer eliminar al Cliente?")){
      var array = JSON.parse(localStorage.getItem("myArray") || '{}');
      
      this.LocalStorageArray = this.LocalStorageArray.filter(x => x != this.selectedCliente);
      this.selectedCliente = new Cliente();

      
      localStorage.setItem('myArray', JSON.stringify(this.LocalStorageArray));
    }
  }
}


