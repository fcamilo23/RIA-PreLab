import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clases/cliente';
import { Producto } from 'src/app/clases/producto';
import { Venta } from 'src/app/clases/venta';
import { ClientesComponent } from '../clientes/clientes.component';
import { ProductosComponent } from '../productos/productos.component';
import { VentasComponent } from '../ventas/ventas.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ClientesArray: Cliente[] = [
    {id: 1, documento: "47277535", nombre: "Facundo", apellido: "Bauza", fecha_nacimiento: "9/9/1995", direccion: "Ruta 3 Km 73", telefono: "094832585"},
    {id: 2, documento: "31503944", nombre: "Facundo", apellido: "Camilo", fecha_nacimiento: "10/5/1999", direccion: "San Jose de Mayo", telefono: "094832585"},
    {id: 3, documento: "41370765", nombre: "Juan", apellido: "Delgado", fecha_nacimiento: "11/4/1997", direccion: "Estacion Gonzales", telefono: "094832585"},
    {id: 4, documento: "29547325", nombre: "Lucas", apellido: "Umpierrez", fecha_nacimiento: "10/7/2001", direccion: "Radial ruta1", telefono: "094832585"},
    {id: 5, documento: "50769843", nombre: "Fabricio", apellido: "Franco", fecha_nacimiento: "2/11/1974", direccion: "Ruta 3 Km 73", telefono: "094832585"},
    {id: 6, documento: "75893925", nombre: "Susanita", apellido: "Quevedo", fecha_nacimiento: "7/5/1999", direccion: "Ruta 3 Km 73", telefono: "094832585"}
  ];

  ProductosArray: Producto[] = [
    {id: 100, nombre: "Sal", descripcion: "Gruesa", precio: "23" , imagen: "www"},
    {id: 101, nombre: "Azucar", descripcion: "Bella Union", precio: "95", imagen: "www"},
    {id: 102, nombre: "Aceite", descripcion: "De Canola", precio: "99" , imagen: "www"},
    {id: 103, nombre: "Pimienta", descripcion: "Negra", precio: "120", imagen: "www"}
  ];

  VentasArray: Venta[] = [
    {id: 1000, fecha:this.getFechaActual(), idCliente: '2', ciCliente:'31503944', idProducto:'101', nombreProducto:'Azucar'},
    {id: 1001, fecha:this.getFechaActual(), idCliente: '4', ciCliente:'29547325', idProducto:'100', nombreProducto:'Sal'},
    {id: 1002, fecha:this.getFechaActual(), idCliente: '5', ciCliente:'50769843', idProducto:'103', nombreProducto:'Pimienta'},
    {id: 1003, fecha:this.getFechaActual(), idCliente: '6', ciCliente:'75893925', idProducto:'102', nombreProducto:'Aceite'}
  ];

    cargarDatos(){
    localStorage.setItem('key', JSON.stringify(10));
    localStorage.setItem('myArray', JSON.stringify(this.ClientesArray)); 

    localStorage.setItem('keyProducto', JSON.stringify(110));
    localStorage.setItem('arrayProducto', JSON.stringify(this.ProductosArray));

    localStorage.setItem('keyVenta', JSON.stringify(1010));
    localStorage.setItem('arrayVentas', JSON.stringify(this.VentasArray));

    alert("Datos cargados correctamente")

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
  
}
