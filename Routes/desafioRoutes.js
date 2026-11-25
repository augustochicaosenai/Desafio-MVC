import { Router } from 'express';
import {
    getJogos,
    getJogosPorFabricante,
    getJogoPorId,
    getJogosPorAno,
    postJogo,
    putJogo,
    deleteJogo
} from '../controllers/desafioControllers.js';


const router = Router();


router.get('/', getJogos);
router.get('/fabricante/:fabricante', getJogosPorFabricante);
router.get('/:id', getJogoPorId);
router.get('/ano/:anolanc', getJogosPorAno);
router.post('/', postJogo);
router.put('/:id', putJogo);
router.delete('/:id', deleteJogo);


export default router;