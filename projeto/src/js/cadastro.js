import { addAluno } from './state.js'
import { validateAlunoForm } from './validation.js'

const form = document.querySelector('#cadastro-form')
const message = document.querySelector('#form-message')

form?.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(form)
  const values = Object.fromEntries(formData.entries())
  const validation = validateAlunoForm(values)

  renderErrors(validation.errors)

  if (!validation.isValid) {
    message.textContent = 'Corrija os campos destacados e tente novamente.'
    message.classList.add('error-text')
    message.classList.remove('success-text')
    return
  }

  addAluno({
    nome: values.nome.trim(),
    email: values.email.trim().toLowerCase(),
    curso: values.curso.trim(),
    idade: Number(values.idade),
  })

  form.reset()
  message.textContent = 'Cadastro realizado com sucesso!'
  message.classList.add('success-text')
  message.classList.remove('error-text')
  renderErrors({})
})

function renderErrors(errors) {
  document.querySelectorAll('[data-error]').forEach((node) => {
    const field = node.getAttribute('data-error')
    node.textContent = errors[field] ?? ''
  })
}
