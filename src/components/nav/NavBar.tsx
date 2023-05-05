import { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getLanguage, setLanguage } from '../../services/firebase/languageService';
import { type NavLanguage } from '../../interfaces/types';

const NavBar = ({
  getLanguage,
  setLanguage,
  languages
}: any): JSX.Element => {
  const [lang, setLang] = useState<NavLanguage>({
    project: '',
    experience: '',
    contact: '',
    language: ''
  })
  const handleNavigation = (selector: string): void => {
    const element = document.querySelector<HTMLElement>(selector);
    if (element !== null) window.scroll(0, element?.offsetTop)
  }

  const handleLanguageChange = (): void => {
    const esp: NavLanguage = {
      project: 'PROYECTOS',
      experience: 'EXPERIENCIA',
      contact: 'CONTACTO',
      language: 'ENGLISH'
    }
    const eng: NavLanguage = {
      project: 'PROJECTS',
      experience: 'EXPERIENCE',
      contact: 'CONTACT',
      language: 'SPANISH'
    }

    if (languages.language === 'es') {
      setLang(esp)
    } else {
      setLang(eng)
    }
  }

  useEffect(() => {
    getLanguage()
    handleLanguageChange()
  }, [getLanguage, languages])

  return (
    <nav className="navbar borderSolid">
      <ul className="navbar__ul">
        <li className="navbar--item" onClick={(): void => { handleNavigation('#project') }}>{lang.project}</li>
        <li className="navbar--item" onClick={(): void => { handleNavigation('#experience') }}>{lang.experience}</li>
        <li className="navbar--item" onClick={(): void => { handleNavigation('#contact') }}>
          <button className="navbar--item__button">{lang.contact}</button>
        </li>
        <li className="navbar--item" >
          <div className="navbar--item__stick"></div>
        </li>
        <li className="navbar--item" onClick={(): void => {
          if (languages.language === 'en') {
            setLanguage('es')
          } else {
            setLanguage('en')
          }
          handleLanguageChange()
        }}>{lang.language}</li>
      </ul>
    </nav >
  )
}

const stateToProp = (state: any): any => ({
  languages: state.languages
});

const dispatchToProp = {
  getLanguage,
  setLanguage
};

export default connect(stateToProp, dispatchToProp)(NavBar);
