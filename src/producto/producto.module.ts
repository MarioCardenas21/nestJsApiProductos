import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controlle';
import { ProductoService } from './producto.service';

@Module({
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
