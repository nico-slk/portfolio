import { useEffect, useState } from 'react';
import { type ExperienceLanguage } from '../../interfaces/types';
import { getLanguage } from '../../services/firebase/languageService';
import { connect } from 'react-redux';
import ExperienceDetail from './ExperienceDetail'
import FormationDetail from './FormationDetail'

const Experience = ({
  languages,
  getLanguage
}: any): JSX.Element => {
  const [lang, setLang] = useState<ExperienceLanguage>({
    experience: '',
    formation: ''
  })

  const handleLanguageChange = (): void => {
    const esp: ExperienceLanguage = {
      experience: 'EXPERIENCIA',
      formation: 'FORMACION'
    }
    const eng: ExperienceLanguage = {
      experience: 'EXPERIENCE',
      formation: 'FORMATION'
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
  }, [languages, getLanguage])

  return (
    <section className='experience' id="experience">

      <div className='experience__titleBox'>
        <div className='experience__titleBox--underline'></div>
        <h1 className='experience__titleBox--title'>{lang.experience}</h1>
      </div>

      <div className="experience__box">
        <div className="experience__box--experienceDetail">
          <ExperienceDetail />
        </div>

        <div className='experience__formation'>
          <span className='experience__formation--title'>{lang.formation}</span>
          <div className="experience__formation--box">
            <FormationDetail />
          </div>
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

export default connect(stateToProp, dispatchToProp)(Experience);
