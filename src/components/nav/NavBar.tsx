import { useEffect } from 'react'
import { connect } from 'react-redux';
import { getLanguage, setLanguage } from '../../services/firebase/languageService';

const NavBar = ({ getLanguage, setLanguage, languages }: any): JSX.Element => {
  // const [lang, setLang] = useState<string>('')
  const handleNavigation = (selector: string): void => {
    const element = document.querySelector<HTMLElement>(selector);
    if (element !== null) window.scroll(0, element?.offsetTop)
  }

  useEffect(() => {
    getLanguage()
    // setLang(languages.language)
  }, [getLanguage])

  return (
    <div className="navbar borderSolid">
      <ul className="navbar__ul">
        <li className="navbar--item" onClick={(): void => { handleNavigation('#project') }}>PROYECTOS</li>
        <li className="navbar--item" onClick={(): void => { handleNavigation('#experience') }}>EXPERIENCIA</li>
        <li className="navbar--item" onClick={(): void => { handleNavigation('#contact') }}>
          <button className="navbar--item__button">CONTACTO</button>
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
          console.log(languages.language);
        }}>ENGLISH</li>
      </ul>
    </div >
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
