import { clearAlunos, getAlunos } from './state.js'

const listContainer = document.querySelector('#lista-alunos')
const stats = document.querySelector('#stats')
const clearButton = document.querySelector('#clear-data')

function renderList() {
  const alunos = getAlunos()

  if (stats) {
    stats.textContent = `Total de registros: ${alunos.length}`
  }

  if (!listContainer) return

  if (!alunos.length) {
    listContainer.innerHTML = `
      <article class="card empty-state">
        <h2>Nenhum registro encontrado</h2>
        <p>Volte para a página de cadastro e adicione um aluno.</p>
      </article>
    `
    return
  }

  listContainer.innerHTML = alunos
    .map(
      (aluno) => `
        <article class="card student-card">
          <h2>${aluno.nome}</h2>
          <p><strong>E-mail:</strong> ${aluno.email}</p>
          <p><strong>Curso:</strong> ${aluno.curso}</p>
          <p><strong>Idade:</strong> ${aluno.idade}</p>
          <small>Cadastrado em: ${new Date(aluno.criadoEm).toLocaleString('pt-BR')}</small>
        </article>
      `,
    )
    .join('')
}

clearButton?.addEventListener('click', () => {
  clearAlunos()
  renderList()
})

renderList()
