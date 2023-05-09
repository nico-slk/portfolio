import { useEffect, useState } from 'react'
import { Card } from './Card'
import { connect } from 'react-redux'
import { getAllProjects } from '../../services/firebase/projectService'
import { type CardListLanguage } from '../../interfaces/types'
import { getLanguage } from '../../services/firebase/languageService';

const CardList = ({
  getAllProjects,
  project,
  getLanguage,
  languages
}: any): JSX.Element => {
  const [lang, setLang] = useState<CardListLanguage>({
    sectionTitle: ''
  })

  const handleLanguageChange = (): void => {
    const esp: CardListLanguage = {
      sectionTitle: 'PROYECTOS'
    }
    const eng: CardListLanguage = {
      sectionTitle: 'PROJECTS'
    }

    if (languages.language === 'es') {
      setLang(esp)
    } else {
      setLang(eng)
    }
  }

  useEffect(() => {
    getAllProjects()
    getLanguage()
    handleLanguageChange()
  }, [getAllProjects, getLanguage, languages])

  return (
    <section className='cardList' id="project">
      <div className='cardList__titleBox'>
        <div className='cardList__titleBox--underline'></div>
        <h1 className='cardList__titleBox--title'>{lang.sectionTitle}</h1>
      </div>
      <div className='cardList__list'>
        {(project.isLoading === false) ? project.project.map((project: any) => <Card project={project} key={project.name} technologies={project.technologies} language={languages.language} />) : <p>Loading...</p>}
      </div>
    </section>
  )
}

const stateToProp = (state: any): any => ({
  project: state.project,
  languages: state.languages
});

const dispatchToProp = {
  getAllProjects,
  getLanguage
};

export default connect(stateToProp, dispatchToProp)(CardList);
