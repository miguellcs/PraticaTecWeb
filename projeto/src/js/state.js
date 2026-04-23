const STORAGE_KEY = 'praticaTecWeb:alunos'

const initialData = [
  {
    id: crypto.randomUUID(),
    nome: 'Maria Oliveira',
    email: 'maria.oliveira@email.com',
    curso: 'Análise e Desenvolvimento de Sistemas',
    idade: 22,
    criadoEm: new Date().toISOString(),
  },
]

let alunos = loadState()

function loadState() {
  const fromStorage = sessionStorage.getItem(STORAGE_KEY)

  if (!fromStorage) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(initialData))
    return [...initialData]
  }

  try {
    const parsed = JSON.parse(fromStorage)
    return Array.isArray(parsed) ? parsed : [...initialData]
  } catch {
    return [...initialData]
  }
}

function persistState() {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(alunos))
}

export function getAlunos() {
  return [...alunos]
}

export function addAluno(aluno) {
  alunos = [
    ...alunos,
    {
      ...aluno,
      id: crypto.randomUUID(),
      criadoEm: new Date().toISOString(),
    },
  ]
  persistState()
}

export function clearAlunos() {
  alunos = []
  persistState()
}
