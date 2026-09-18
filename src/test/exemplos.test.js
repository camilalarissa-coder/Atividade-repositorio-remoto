const { buscarAluno } = require(`../exemplos`);

test(`Deve encontrar o aluno`, async () => {
    const resultado = await buscarAluno();

    expect(resultado).toBe(`Aluno encontrado!`);
});