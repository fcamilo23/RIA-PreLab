import { Cliente } from "./cliente"
import { Fecha } from "./fecha"
import { Producto } from "./producto";

export class Venta {
    fecha!: Fecha;
    cliente!: Cliente;
    producto!: Producto
}