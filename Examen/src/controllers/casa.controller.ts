import { Request, Response } from 'express';

const casas = [
  { id: 1, nombre: "Casa 1" },
  { id: 2, nombre: "Casa 2" }
];

// Cambia la firma para ser más explícita
export const getCasa = (req: Request, res: Response): Response => {
  const idCasa = req.query.idCasa ? Number(req.query.idCasa) : null;

  if (idCasa) {
    const casa = casas.find(c => c.id === idCasa);
    if (casa) {
      return res.status(200).json([casa]);
    }
    return res.status(404).send("No se encuentra");
  }

  return res.status(200).json(casas);
};