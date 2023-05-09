import { useEffect, useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { type LanguagesString, type ContactDetailLanguageLinks } from '../../interfaces/types'

export const ContactLinks = ({
  language
}: LanguagesString): JSX.Element => {
  const [lang, setLang] = useState<ContactDetailLanguageLinks>({
    contactMessage: ''
  })

  const handleLanguageChange = (): void => {
    const esp: ContactDetailLanguageLinks = {
      contactMessage: '¡Hola! ¡Gracias por visitar mi portafolio! Espero que haya sido de tu agrado el tiempo que has estado en este espacio, como así también espero que haya sido de tu agrado los proyectos que hayas visto. Aún así, te dejo a un click mis links personales para que puedas saber mas de mi, puedas comunicarte por mail o directamente escribirme en la caja de mensaje a la derecha. ¡Muchas gracias!'
    }
    const eng: ContactDetailLanguageLinks = {
      contactMessage: 'Hello! Thanks for visiting my portfolio! I hope you liked the time you have been in this space, as well as I hope you liked the projects you have seen. Even so, I leave you with a click my personal links so that you can know more about me, you can communicate by mail or directly write to me in the message box on the right. Thank you so much!'
    }

    if (language === 'es') {
      setLang(esp)
    } else {
      setLang(eng)
    }
  }

  useEffect(() => {
    handleLanguageChange()
  }, [language])

  return (
    <div className="contact__message">
      <div className="contact__message--textMessage">
        {lang.contactMessage}
      </div>
      <div className="contact__message--links">
        <ul>
          <li>
            <a href="https://github.com/nico-slk">
              <SiGithub /> <p>nico-slk</p>
            </a>
          </li>
          <li>
            <a href="mailto:nicolas.selicki@gmail.com">
              <HiOutlineMail />
              <p>nicolas.selicki@gmail.com</p>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nicolas-selicki-web-fullstack/">
              <SiLinkedin /> <p>Nicolas Selicki</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
