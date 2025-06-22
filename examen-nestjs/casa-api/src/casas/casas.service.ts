import { Injectable } from '@nestjs/common';

@Injectable()
export class CasasService {
  private casas = [
    { id: 1, nombre: 'Casa 1' },
    { id: 2, nombre: 'Casa 2' },
  ];

  buscarCasa(idCasa?: string) {
    if (!idCasa) {
      return { existe: true, data: this.casas };
    }

    const casa = this.casas.find(c => c.id === Number(idCasa));
    return {
      existe: !!casa,
      data: casa ? [casa] : null,
    };
  }
}