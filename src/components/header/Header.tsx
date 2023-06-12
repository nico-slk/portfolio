import { Presentation } from './Presentation'
import { Introduction } from './Introduction'
import { useEffect, useState } from 'react'
import { type ButtonValue, type HeaderLanguage } from '../../interfaces/types'
import { getLanguage } from '../../services/firebase/languageService';
import { connect } from 'react-redux';

const Header = ({
  languages,
  getLanguage
}: any): JSX.Element => {
  const [langButton, setLangButton] = useState<ButtonValue>({
    buttonValue: ''
  })
  const [lang, setLang] = useState<HeaderLanguage>({
    preTitle: '',
    presentationMessage: ''
  })

  const handleLanguageChange = (): void => {
    const espButton: ButtonValue = {
      buttonValue: 'DESCARGAR CV'
    }
    const engButton: ButtonValue = {
      buttonValue: 'DOWNLOAD RESUME'
    }
    const esp: HeaderLanguage = {
      preTitle: 'Hola! Soy ',
      presentationMessage: 'Vivo en La Plata, Provincia de Buenos Aires, Argentina. Tengo un perfil orientado a resultados, proactivo y colaborativo, me gusta formar parte de equipos ambiciosos acompañado de grandes aprendizajes. "¡Siempre aprendiendo!" Intento adquirir nuevos conocimientos todos los dias para llegar a ser un desarrollador completo'
    }
    const eng: HeaderLanguage = {
      preTitle: "Hello! I'm ",
      presentationMessage: 'Based in La Plata, Province of Buenos Aires, Argentina. I have a results-oriented, proactive and collaborative profile, I like to be part of ambitious teams accompanied by great learning. "Always learning!" I try to acquire new knowledge every day to become a complete developer.'
    }

    if (languages.language === 'es') {
      setLangButton(espButton)
      setLang(esp)
    } else {
      setLangButton(engButton)
      setLang(eng)
    }
  }

  useEffect(() => {
    getLanguage()
    handleLanguageChange()
  }, [getLanguage, languages])

  return (
    <section className="header">
      <div className="header__content">
        <div className="header--presentation">
          <Presentation langButton={langButton} information={lang} language={languages.language} />
        </div>
        <div className="header--introduction">
          <Introduction />
        </div>
      </div>
    </section>
  )
}

const stateToProp = (state: any): any => ({
  languages: state.languages
});

const dispatchToProp = {
  getLanguage
};

export default connect(stateToProp, dispatchToProp)(Header);
