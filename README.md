# API REST con NestJS - Productos

Este proyecto implementa una API RESTful con NestJS para gestionar productos, simulando una base de datos con un arreglo en memoria.

## 🛠 Tecnologías
- NestJS
- TypeScript
- Arquitectura por capas
- DTOs y validaciones con `class-validator`
- Pruebas con Apidog / Postman

## 📦 Endpoints

- `GET /api/productos` → Listar todos
- `GET /api/productos/:id` → Obtener uno
- `POST /api/productos` → Crear nuevo
- `PATCH /api/productos/:id` → Actualizar
- `DELETE /api/productos/:id` → Eliminar

## 🚀 Ejecutar

```bash
npm install
npm run start:dev
