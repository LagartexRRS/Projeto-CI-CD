const adicionarTarefa = require('../script');

describe('Testes da função adicionarTarefa', () => {
  test('Adiciona uma nova tarefa à lista', () => {
    document.body.innerHTML = '<ul id="lista"></ul>';
    const lista = document.getElementById('lista');

    adicionarTarefa('Estudar CI/CD', lista);

    expect(lista.children.length).toBe(1);
    expect(lista.textContent).toContain('Estudar CI/CD');
  });

  test('Erro ao tentar adicionar tarefa vazia', () => {
    document.body.innerHTML = '<ul id="lista"></ul>';
    const lista = document.getElementById('lista');

    expect(() => adicionarTarefa('', lista)).toThrow('A tarefa não pode ser vazia');
  });
});
