function validarPeriodo(dataInicio, dataFim, paginaAtual, paginaValida) {
    if (!dataInicio || !dataFim) return { cancelar: false }; // Se alguma data estiver vazia, não cancela

    let inicio = new Date(dataInicio);
    let fim = new Date(dataFim);

    if (fim <= inicio && paginaAtual === paginaValida) {
        alert("O prazo final não pode ser menor que a data inicial");
        return { dataInicio: null, dataFim: null, cancelar: true };
    }

    return { dataInicio, dataFim, cancelar: false };
}



//chamada da função
let resultado = validarPeriodo(
    data.dteDATA_PLANEJAMENTO_FERIAS, 
    data.dteDATA_NOVA_SAIDA_FERIAS, 
    currentPage, 
    2
);

// Atualiza os valores conforme o resultado
cancelSubmit = resultado.cancelar;
data.dteDATA_PLANEJAMENTO_FERIAS = resultado.dataInicio;
data.dteDATA_NOVA_SAIDA_FERIAS = resultado.dataFim;
