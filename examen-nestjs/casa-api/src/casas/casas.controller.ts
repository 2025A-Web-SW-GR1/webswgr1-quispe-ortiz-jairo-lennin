import { Controller, Get, Query, Res, HttpStatus } from '@nestjs/common';
import { CasasService } from './casas.service';

@Controller('casas')
export class CasasController {
  constructor(private readonly casasService: CasasService) {}

  @Get()
  getCasas(
    @Query('idCasa') idCasa: string,
    @Res() res,
  ) {
    const result = this.casasService.buscarCasa(idCasa);
    if (!result.existe) {
      return res.status(HttpStatus.NOT_FOUND).send('No se encuentra');
    }
    return res.status(HttpStatus.OK).json(result.data);
  }
}