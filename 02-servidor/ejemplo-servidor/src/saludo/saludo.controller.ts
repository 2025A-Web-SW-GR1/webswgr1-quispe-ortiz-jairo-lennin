import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('saludo')
export class SaludoController {
  
  // GET /saludo
  @Get()
  getSaludo(): string {
    return '¡Hola, mundo!';
  }

  // POST /saludo
  @Post()
  crearSaludo(@Body() body: { nombre: string }): string {
    return `¡Hola, ${body.nombre}!`;
  }
}