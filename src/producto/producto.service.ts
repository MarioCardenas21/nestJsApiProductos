import { Injectable, NotFoundException } from '@nestjs/common';
import { Producto } from './producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductoService {
  private productos: Producto[] = [
    { id: 1, nombre: 'Martillo', precio: 45, stock: 10, activo: true, createdAt: new Date(), updatedAt: new Date() },
    { id: 2, nombre: 'Taladro', precio: 350, stock: 5, activo: true, createdAt: new Date(), updatedAt: new Date() },
  ];

  private nextId = 3;

  findAll(): Producto[] {
    return this.productos;
  }

  findOne(id: number): Producto {
    const p = this.productos.find(x => x.id === id);
    if (!p) throw new NotFoundException(`Producto ${id} no existe`);
    return p;
  }

  create(dto: CreateProductoDto): Producto {
    const now = new Date();
    const nuevo: Producto = {
      id: this.nextId++,
      nombre: dto.nombre,
      precio: dto.precio,
      stock: dto.stock,
      activo: dto.activo ?? true,
      createdAt: now,
      updatedAt: now,
    };
    this.productos.push(nuevo);
    return nuevo;
  }

  update(id: number, dto: UpdateProductoDto): Producto {
    const prod = this.findOne(id);
    const updated: Producto = {
      ...prod,
      ...dto,
      updatedAt: new Date(),
    };
    this.productos = this.productos.map(p => (p.id === id ? updated : p));
    return updated;
  }

  remove(id: number): void {
    this.findOne(id); // lanza 404 si no existe
    this.productos = this.productos.filter(p => p.id !== id);
  }
}
