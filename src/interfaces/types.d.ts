export interface ContactForm {
  name: string
  email: string
  message: string
  file: File | null
}

export interface ButtonProps {
  fn: () => any
  children: any
}
export interface Experience_EN {
  company: string
  position: string
  startDate_EN: string
  endDate_EN: string
  description_EN: string
}

export interface Experience_ES {
  company: string
  position: string
  startDate_ES: string
  endDate_ES: string
  description_ES: string
}

export interface Project {
  name: string
  description: string
  technologies: Tech[]
}

export interface Tech {
  id: string
  value: string
  isChecked: boolean
}

export interface Formation_ES {
  year: string
  title: string
  organization_ES: string
}

export interface Formation_EN {
  year: string
  title: string
  organization_EN: string
}
