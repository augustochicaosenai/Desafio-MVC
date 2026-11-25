import * as jogoModel from '../models/desafioModels.js';


export const getJogos = (req, res) => {
    const jogos = jogoModel.listarTodos();
    res.status(200).json(jogos);
};


export const getJogosPorFabricante = (req, res) => {
    const fabricante = req.params.fabricante.trim();
    const jogosFabricante = jogoModel.buscarPorFabricante(fabricante);


    if (jogosFabricante.length > 0) {
        res.status(200).json(jogosFabricante);
    } else {
        res.status(404).json({
            mensagem: `Nenhum jogo do fabricante ${fabricante} encontrado`
        });
    }
};


export const getJogoPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const jogo = jogoModel.buscarPorId(id);


    if (jogo) {
        res.status(200).json(jogo);
    } else {
        res.status(404).json({
            mensagem: `Jogo com id: ${id} não encontrado`
        });
    }
};


export const getJogosPorAno = (req, res) => {
    const anolanc = parseInt(req.params.anolanc);
    const jogosAno = jogoModel.buscarPorAno(anolanc);


    if (jogosAno.length > 0) {
        res.status(200).json(jogosAno);
    } else {
        res.status(404).json({
            mensagem: `Nenhum jogo encontrado para o ano ${anolanc}`
        });
    }
};


export const postJogo = (req, res) => {
    const { nomejogo, fabricante, idademin, anolanc } = req.body;


    if (!nomejogo || !fabricante || idademin === undefined || anolanc === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nomejogo, fabricante, idademin, anolanc) são obrigatórios.'
        });
    }


    const novoJogo = jogoModel.adicionarJogo({ nomejogo, fabricante, idademin, anolanc });
    res.status(201).json(novoJogo);
};


export const putJogo = (req, res) => {
    const id = parseInt(req.params.id);
    const { nomejogo, fabricante, idademin, anolanc } = req.body;


    if (!nomejogo || !fabricante || idademin === undefined || anolanc === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nomejogo, fabricante, idademin, anolanc) São obrigatorios'
        });
    }


    const jogoAtualizado = jogoModel.atualizarJogo(id, { nomejogo, fabricante, idademin, anolanc });


    if (!jogoAtualizado) {
        return res.status(404).json({
            mensagem: `Jogo com ID ${id} não encontrado para atualização.`
        });
    }


    res.status(200).json(jogoAtualizado);
};


export const deleteJogo = (req, res) => {
    const id = parseInt(req.params.id);
    const jogoRemovido = jogoModel.deletarJogo(id);


    if (!jogoRemovido) {
        return res.status(404).json({
            mensagem: `Jogo com ID ${id} não encontrado para exclusão.`
        });
    }


    res.status(200).json({
        mensagem: `Jogo com ID ${id} removido com sucesso`,
        jogo: jogoRemovido
    });
};