export type ScreenId =
  | 'home'
  | 'projects'
  | 'project-detail'
  | 'manual'
  | 'experience'
  | 'stack'
  | 'contact'

export interface Project {
  id: string
  no: string
  title: string
  year: number
  tech: string[]
  palette: string
  icon: string
  description: string
  url?: string
  repo?: string
}

export interface ExperienceEntry {
  role: string
  company: string
  period: string
  bullets: string[]
}

export interface StackItem {
  name: string
  category: 'frontend' | 'backend' | 'tooling' | 'design'
  icon?: string
}

export interface TweakConfig {
  turnMs: number
  turnStyle: 'book' | 'fade' | 'slide'
  sound: boolean
  soundVolume: number
  showCornerMarks: boolean
}
