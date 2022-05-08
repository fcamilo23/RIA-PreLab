/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../clases/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegar(){
    this.router.navigate(['/productos']);
  }

  ProductosArray: Producto[] = [
    {nombre: "Sal", descripcion: "Gruesa", precio: "23" , imagen: "www"},
    {nombre: "Azucar", descripcion: "Bella Union", precio: "95", imagen: "www"},
    {nombre: "Azucar", descripcion: "Bella Union", precio: "95", imagen: "www"}
  ];

  selectedProducto: Producto = new Producto();

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
     
    }
    
    
    
    
    var x = false;
    for (let aux of this.ProductosArray) {
      if(this.isEqual(aux.documento, this.selectedProducto.documento))
        if(aux.documento != ""){
        x = true;
    }
    */
  
    
     // this.selectedProducto.id = this.ProductosArray.length + 1;
      this.ProductosArray.push(this.selectedProducto);
    
    
    this.selectedProducto = new Producto();  
  
  }

  
  openEdit(producto: Producto){
    this.selectedProducto = producto;
  }

  delet(){
    if(confirm("Esta seguro de querer eliminar al Producto?")){
      this.ProductosArray = this.ProductosArray.filter(x => x != this.selectedProducto);
      this.selectedProducto = new Producto();
    }
  }


  editing(){
      this.selectedProducto = new Producto();
    
  }
  limpiar(){
    this.selectedProducto = new Producto();
  }
  
    
  }


