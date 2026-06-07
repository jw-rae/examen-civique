import type { Question, QuestionCategory } from './types'
import principesData from '../../questions/principes-valeurs-de-la-republique.json'
import systemeData from '../../questions/systeme-institutionnel-et-politique.json'
import droitsData from '../../questions/droits-et-devoirs.json'
import societeData from '../../questions/vivre-dans-la-societe-francaise.json'
import histoireData from '../../questions/histoire-geographie-et-culture.json'

export const categories: QuestionCategory[] = [
  principesData as QuestionCategory,
  systemeData as QuestionCategory,
  droitsData as QuestionCategory,
  societeData as QuestionCategory,
  histoireData as QuestionCategory,
]

export function getQuestionsFromCategories(names: string[]): Question[] {
  const selected = categories.filter(c => names.includes(c.categorie))
  return selected.flatMap(c =>
    c.questions.map(q => ({ ...q, categorie: c.categorie }))
  )
}

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
