import { getAlunos } from './state.js'

const total = getAlunos().length

const badge = document.querySelector('.badge')
if (badge) {
  badge.textContent = `Projeto Acadêmico • ${total} registro(s) em memória`
}
