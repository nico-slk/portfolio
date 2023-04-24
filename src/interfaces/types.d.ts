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
