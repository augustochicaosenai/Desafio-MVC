const jogos = [{ idjogo:1,nomejogo:"GTA VI",fabricante:"RockStar",idademin:18,anolanc:2026},
{idjogo:2,nomejogo:"Hollow Knight",fabricante:"Team Cherry",idademin:10,anolanc:2017},
{idjogo:3,nomejogo:"The Last of Us",fabricante:"Naughty Dog",idademin:16,anolanc:2013},
{idjogo:4,nomejogo:"God of War",fabricante:"Santa Monica Studio",idademin:18,anolanc:2018},
{idjogo:5,nomejogo:"Cyberpunk 2077",fabricante:"CD Projekt Red",idademin:18,anolanc:2020}]

export const listarTodos = () => {
    return jogos;
};

export const buscarPorId = (id) => {
    return jogos.find(j => j.idjogo === id);
};

export const buscarPorFabricante =(fabricante) =>{
    return jogos.filter( j => j.fabricante.toLowerCase() === fabricante.toLowerCase());
}

export const buscarPorAno = (anolanc) =>{
    return jogos.filter( j => j.anolanc === anolanc);
}

export const adicionarJogo = ({ nomejogo, fabricante, idademin, anolanc }) => {
    const novoJogo = {
        idjogo: jogos.length + 1,
        nomejogo,
        fabricante,
        idademin: parseInt(idademin),
        anolanc: parseInt(anolanc)

    };

    jogos.push(novoJogo);
    return novoJogo;
};

export const atualizarJogo = (idjogo, { nomejogo, fabricante, idademin, anolanc }) => {
    const jogoIndex = jogos.findIndex(j => j.idjogo === idjogo);

    if (jogoIndex === -1) return null;

    jogos[jogoIndex] = {
        idjogo,
        nomejogo,
        fabricante,
        idademin: parseInt(idademin),
        anolanc: parseInt(anolanc)
    };

    return jogos[jogoIndex];
};

export const deletarJogo = (idjogo) =>{
     const index = jogos.findIndex(j => j.idjogo === idjogo);
    if (index === -1) return null;

    const [jogoRemovido] = jogos.splice(index, 1);
    return jogoRemovido;
}

