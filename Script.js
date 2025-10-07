function adicionarTarefa(tarefa, lista) {
  if (!tarefa || tarefa.trim() === '') {
    throw new Error('A tarefa não pode ser vazia');
  }

  const item = document.createElement('li');
  item.textContent = tarefa;
  lista.appendChild(item);
}

if (typeof module !== 'undefined') {
  module.exports = adicionarTarefa; // exporta para o Jest poder testar
}
