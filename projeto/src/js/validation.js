export function validateAlunoForm(values) {
  const errors = {}

  if (!values.nome || values.nome.trim().length < 3) {
    errors.nome = 'Informe um nome com pelo menos 3 caracteres.'
  }

  const emailRegex = /^[\w-.]+@[\w-]+\.[a-z]{2,}$/i
  if (!values.email || !emailRegex.test(values.email)) {
    errors.email = 'Informe um e-mail válido.'
  }

  if (!values.curso || values.curso.trim().length < 3) {
    errors.curso = 'Informe o curso com pelo menos 3 caracteres.'
  }

  const idade = Number(values.idade)
  if (!Number.isInteger(idade) || idade < 14 || idade > 120) {
    errors.idade = 'Idade deve ser um número inteiro entre 14 e 120.'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
