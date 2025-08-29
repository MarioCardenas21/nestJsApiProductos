export class Producto {
  id: number;
  nombre: string;
  precio: number;   // Q
  stock: number;    // existencias
  activo: boolean;  // habilitado para venta
  createdAt: Date;
  updatedAt: Date;
}
