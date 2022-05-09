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

   // localStorage.setItem('keyProducto', JSON.stringify(110));
   // localStorage.setItem('arrayProducto', JSON.stringify(this.ProductosArray));

    /*
    let datosProducto = JSON.parse(localStorage.getItem("datosProducto") || '{}');
    if(datosProducto == '{}'){
      localStorage.setItem('keyProducto', JSON.stringify(110));
      localStorage.setItem('arrayProducto', JSON.stringify(this.ProductosArray));

      localStorage.setItem('datosProducto', 'dalegasss');
    }
    */
  }

  navegar(){
    this.router.navigate(['/productos']);
  }

  ProductosArray: Producto[] = [
    {id: 100, nombre: "Sal", descripcion: "Gruesa", precio: "23" , imagen: "www"},
    {id: 101, nombre: "Azucar", descripcion: "Bella Union", precio: "95", imagen: "www"}
  ];

  LocalStorageProducto: Producto[] = JSON.parse(localStorage.getItem("arrayProducto") || '{}');

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

     if(this.selectedProducto.id == null){
     var x = false;

     if(x == false){
 
     let x = JSON.parse(localStorage.getItem("keyProducto") || '{}');
     x++;
     localStorage.setItem('keyProducto', JSON.stringify(x));
 
       //this.selectedCliente.id = this.ClientesArray.length + 1;
 
 
       this.selectedProducto.id = x;

       if(this.selectedProducto.nombre != ""){
       this.ProductosArray.push(this.selectedProducto);
    
       // Se parsea para poder ser usado en js con JSON.parse :)
 
       var array = JSON.parse(localStorage.getItem("arrayProducto") || '{}');
       array.push(this.selectedProducto);
       localStorage.setItem('arrayProducto', JSON.stringify(array));
       location.reload();
 
       }
  
  }
}

else{
  this.editing();

}
}

  
  openEdit(producto: Producto){
    this.selectedProducto = producto;
  }

  delet(){
    if(confirm("Esta seguro de querer eliminar el Producto?")){
      var array = JSON.parse(localStorage.getItem("arrayProducto") || '{}');
      
      this.LocalStorageProducto = this.LocalStorageProducto.filter(x => x != this.selectedProducto);
      this.selectedProducto = new Producto();

      
      localStorage.setItem('arrayProducto', JSON.stringify(this.LocalStorageProducto));
    }
    
  
  }


  editing(){
    var array = JSON.parse(localStorage.getItem("arrayProducto") || '{}');
    
    for (const i in array) {
      if (array[i].id == this.selectedProducto.id) {
        array[i].nombre = this.selectedProducto.nombre;
        array[i].descripcion = this.selectedProducto.descripcion;
        array[i].precio = this.selectedProducto.precio;
        array[i].imagen = this.selectedProducto.imagen;


      }
    }
    //array.push(this.selectedCliente);
    localStorage.setItem('arrayProducto', JSON.stringify(array));
    this.limpiar();
  }
  limpiar(){
    this.selectedProducto = new Producto();
  }
  
    
  }


