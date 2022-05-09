import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { Cliente } from 'src/app/clases/cliente';
import { Venta } from 'src/app/clases/venta';
import { Fecha } from 'src/app/clases/fecha';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})


export class VentasComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    
    localStorage.setItem('keyVenta', JSON.stringify(1010));
    localStorage.setItem('arrayVentas', JSON.stringify(this.VentasArray));
  }


  today: Date = new Date();



  VentasArray: Venta[] = [
    {id: 1000, fecha:this.getFechaActual(), idCliente: '1', ciCliente:'53547934', idProducto:'100', nombreProducto:'Azucar'},
    {id: 1001, fecha:this.getFechaActual(), idCliente: '1', ciCliente:'53547934', idProducto:'101', nombreProducto:'Sal'}
  ];

  LocalStorageVenta: Venta[] = JSON.parse(localStorage.getItem("arrayVentas") || '{}');
 
  LocalStorageProducto: Producto[] = JSON.parse(localStorage.getItem("arrayProducto") || '{}');
  LocalStorageCliente: Cliente[] = JSON.parse(localStorage.getItem("myArray") || '{}');

  selectedProducto: Producto = new Producto();
  selectedCliente: Cliente = new Cliente();
  selectedVenta: Venta = new Venta();

  

  add(){
    /* var x = false;
     for (let aux of this.ClientesArray) {
       if(aux.documento === this.selectedCliente.documento)
         x = true;
     }
     if(x = false){
      
     }*/
     if(this.selectedCliente.id == null || this.selectedProducto.id == null){
      alert("Debe seleccionar un cliente y un producto para continuar");
    }
    else{
     
     var x = false;
     
     if(x == false){
 
     let x = JSON.parse(localStorage.getItem("keyVenta") || '{}');
     x++;
     localStorage.setItem('keyVenta', JSON.stringify(x));
 
       //this.selectedCliente.id = this.ClientesArray.length + 1;
 
 
       this.selectedVenta.id = x;
       this.selectedVenta.fecha = this.getFechaActual();
       this.selectedVenta.idCliente = this.selectedCliente.id.toString();
       this.selectedVenta.ciCliente = this.selectedCliente.documento;
       this.selectedVenta.idProducto = this.selectedProducto.id.toString();
       this.selectedVenta.nombreProducto = this.selectedProducto.nombre;


       this.VentasArray.push(this.selectedVenta);
 
 
   
       // Se parsea para poder ser usado en js con JSON.parse :)
 
       var array = JSON.parse(localStorage.getItem("arrayVentas") || '{}');
       array.push(this.selectedVenta);
       localStorage.setItem('arrayVentas', JSON.stringify(array));
       location.reload();
 
      
     }
     
     
 
     this.selectedVenta = new Venta();  
     this.selectedCliente = new Cliente();
     this.selectedProducto = new Producto();
   }
   
}
  
  getFechaActual():string{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = String(today.getFullYear());

    var hour = String(today.getHours() > 12 ? today.getHours() - 12 : (today.getHours() < 10 ? "0" + today.getHours() : today.getHours()));
    var min = String(today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes());
    var seg = String(today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds());
 



    return dd + "/" + mm + "/" + yyyy + " - " + hour + ":" + min + ":" + seg;
  }

  limpiar(){
    this.selectedCliente = new Cliente();
    this.selectedProducto = new Producto();

  }
  openEditP(producto: Producto){
    this.selectedProducto = producto;
  }

  openEditC(cliente: Cliente){
    this.selectedCliente = cliente;
  }

}
