export interface ContactForm {
  name: string
  email: string
  message: string
  file: File | null
}

export interface ButtonProps {
  nameClass: string
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
  link?: string
  technologies: Tech[]
}

export interface Tech {
  id: string
  value: string
  isChecked: boolean
  component: string
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

export interface Language {
  lang: string
}

export interface NavLanguage {
  project: string
  experience: string
  contact: string
  language: string
}

export interface CardListLanguage {
  sectionTitle: string
}

export interface ButtonValue {
  buttonValue: string
}

export interface ExperienceLanguage {
  experience: string
  formation: string
}

interface LanguagesString {
  language: string
}

// interface CustomComponentProps {
//   languages: LanguagesString
//   getLanguage: () => void
// }

interface ExperienceArray {
  experiences: Experience_EN[] | Experience_ES[]
}

// export interface ExperienceDetailProps {
//   getExperiencesES: () => void
//   getExperiencesEN: () => void
//   experience: ExperienceArray
//   languages: LanguagesString
//   getLanguage: () => void
// }

interface FormationArray {
  isLoading: boolean
  formation: Formation_EN[] | Formation_ES[]
}

// export interface FormationDetailProps {
//   getFormationES: () => void
//   getFormationEN: () => void
//   formation: FormationArray
//   languages: LanguagesString
//   getLanguage: () => void
// }

export interface TechnologieTitle {
  technologieTitle: string
}

export interface ContactDetailLanguage {
  fileTypeError: string
  fileSizeError: string
  noFileSelected: string
  title: string
  name: string
  email: string
  message: string
  uploadFile: string
  placeholderName: string
  placeholderEmail: string
  placeholderMessage: string
}

export interface ContactDetailLanguageLinks {
  contactMessage: string
}

export interface HeaderLanguage {
  preTitle: string
  presentationMessage: string
}
