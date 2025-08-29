import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api'); // opcional: prefijo global /api
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,               // solo permite props declaradas en DTOs
    forbidNonWhitelisted: true,    // rechaza props extra
    transform: true,               // convierte tipos (string->number, etc.)
  }));

  await app.listen(3001);
  console.log(`API corriendo en http://localhost:3001/api`);
}
bootstrap();
