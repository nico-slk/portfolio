import { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { SlMenu } from 'react-icons/Sl'
import { TfiClose } from 'react-icons/Tfi'
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
  const [deployed, setDeployed] = useState<string>('deployed')
  const handleNavigation = (selector: string): void => {
    const element = document.querySelector<HTMLElement>(selector);
    if (element !== null) window.scroll(0, element?.offsetTop)
  }

  const switchBurger = (): void => {
    if (deployed === 'deployed') {
      setDeployed('not-deployed')
    } else {
      setDeployed('deployed')
    }
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
  }, [getLanguage, languages, deployed])

  return (
    <nav className="navbar">
      <ul className={`navbar__ul ${deployed !== 'deployed' ? 'not_deployed_nav' : deployed}`}>
        <li className={`navbar--item x ${deployed !== 'deployed' ? 'not_deployed_nav' : deployed}`} onClick={switchBurger}><TfiClose /></li>
        <li className="navbar--item" onClick={(): void => { handleNavigation('#project') }}>{lang.project}</li>
        <li className="navbar--item" onClick={(): void => { handleNavigation('#experience') }}>{lang.experience}</li>
        <li className="navbar--item" onClick={(): void => { handleNavigation('#contact') }}>
          <button className="navbar--item__button">{lang.contact}</button>
        </li>
        <li className="navbar--item " >
          <div className="navbar--item__stick stick_navbar"></div>
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

      <span className={`navbar_menu ${deployed === 'deployed' ? 'not_deployed_nav' : deployed}`} onClick={switchBurger}><SlMenu /></span>
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
