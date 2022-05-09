import { Cliente } from "./cliente"
import { Fecha } from "./fecha"
import { Producto } from "./producto";

export class Venta {
    id!: number;
    fecha!: string;
    idCliente!: string;
    ciCliente!: string;
    idProducto!: string;
    nombreProducto!: string;
}