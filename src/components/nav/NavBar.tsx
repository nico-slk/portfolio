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
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleNavigation = (selector: string): void => {
    const element = document.querySelector<HTMLElement>(selector);
    if (element !== null) window.scroll(0, element?.offsetTop)
  }

  const switchBurger = (): void => {
    if (!isOpen) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
    console.log(isOpen);
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
    console.log(isOpen);
  }, [getLanguage, languages, setIsOpen])

  return (
    <nav className="navbar">
      <div className='burger' onClick={switchBurger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* <ul className="navbar__ul deployed_nav"> */}
      <ul className={`navbar__ul ${!setIsOpen && 'not_deployed_nav'}`}>
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
