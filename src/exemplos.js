const alunos = [
    {
        nome: `Maria`,
        Idade: 24,
        Curso: `TI`,
    },

    {
        nome: `Liz`,
        Idade: 18,
        Curso: `Teatro`,
    }
];

console.log(alunos);

async function buscarAluno() {
    return `Aluno encontrado!`;
}

async function executar() {
    const resultado = await buscarAluno();

    console.log(resultado);
}

// Cria uma Promise para simular uma operação assíncrona
function buscarDados() {
    return new Promise((resolve, reject) => {

        // O setTimeout simula uma operação que demora para ser concluída
        setTimeout(() => {

            // Quando terminar, retorna os dados encontrados
            resolve(`Dados encontrados com sucesso!`);
        }, 2000);
    });
}

// Função assíncrona que utiliza a Promise
async function executarBusca() {

    // O await espera a Promise terminar para continuar
    const resultado = await buscarDados();

    // Depois que a Promise é resolvida, o resultado é exibido no terminal
    console.log(resultado);
}

module.exports = {
    alunos,
    buscarAluno,
    buscarDados
};