export interface Question {
  id: number
  question: string
  bonne_reponse: string
  description_bonne_reponse: string
  mauvais_choix: string[]
  categorie?: string
  topics?: string[]
}

export interface QuestionCategory {
  categorie: string
  questions: Question[]
}

export type Page = 'start' | 'game' | 'summary'

export interface AnswerRecord {
  questionId: number
  category: string
  selected: string
  correct: boolean
}
