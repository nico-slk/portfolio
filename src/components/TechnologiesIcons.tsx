import { SiExpress, SiFirebase, SiJavascript, SiMysql, SiPostgresql, SiReact, SiRedux, SiSpring, SiTypescript } from 'react-icons/si';
import { FaJava, FaNodeJs } from 'react-icons/fa';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { type TechnologieTitle } from '../interfaces/types';
import { getLanguage } from '../services/firebase/languageService';

const TechnologiesIcons = ({
  getLanguage,
  languages
}: any): JSX.Element => {
  const [lang, setLang] = useState<TechnologieTitle>({
    technologieTitle: ''
  })
  const handleLanguageChange = (): void => {
    const esp: TechnologieTitle = {
      technologieTitle: 'TECNOLOGIAS QUE TRABAJO'
    }
    const eng: TechnologieTitle = {
      technologieTitle: 'TECHNOLOGIES THAT I USE'
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
    <section className="technologiesList">
      <h1 className="technologiesList__title">
        {lang.technologieTitle}
      </h1>
      <div className="technologiesList__box">
        <SiSpring />
        <SiMysql />
        <SiRedux />
        <SiPostgresql />
        <FaJava />
        <SiExpress />
        <SiReact />
        <SiJavascript />
        <FaNodeJs />
        <SiTypescript />
        <SiFirebase />
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

export default connect(stateToProp, dispatchToProp)(TechnologiesIcons);
