import { useEffect, useState } from 'react';
import forwardIcon from '../../assets/forwardIcon.svg'
import { type ButtonValue, type Tech } from '../../interfaces/types';
import { Button } from '../common/Button'
import { SiExpress, SiFirebase, SiJavascript, SiMysql, SiPostgresql, SiReact, SiRedux, SiSpring, SiTypescript } from 'react-icons/si';
import { FaJava, FaNodeJs } from 'react-icons/fa';

export const Card = ({
  project,
  technologies,
  language
}: any): JSX.Element => {
  const [lang, setLang] = useState<ButtonValue>({
    buttonValue: ''
  })

  const handleLanguageChange = (): void => {
    const esp: ButtonValue = {
      buttonValue: 'VER PROYECTO'
    }
    const eng: ButtonValue = {
      buttonValue: 'GO TO PROJECT'
    }

    if (language === 'es') {
      setLang(esp)
    } else {
      setLang(eng)
    }
  }

  const technologiesFilter = (tech: string, key: string): JSX.Element => {
    switch (tech) {
      case 'Java':
        return <FaJava key={key} />
      case 'Node.js':
        return <FaNodeJs key={key} />
      case 'Springboot':
        return <SiSpring key={key} />
      case 'MySQL':
        return <SiMysql key={key} />
      case 'Redux':
        return <SiRedux key={key} />
      case 'PostreSQL':
        return <SiPostgresql key={key} />
      case 'Express':
        return <SiExpress key={key} />
      case 'React':
        return <SiReact key={key} />
      case 'JavaScript':
        return <SiJavascript key={key} />
      case 'TypeScript':
        return <SiTypescript key={key} />
      case 'Firebase':
        return <SiFirebase key={key} />
      default:
        return <></>
    }
  }

  useEffect(() => {
    handleLanguageChange()
  }, [language, project])

  return (
    <div className="card">
      <div className="card__box">
        <div className="card__box--content">
          <h4 className="card__box--content__title">
            {project.name}
          </h4>
          <p className="card__box--content__description">
            {project.description}
          </p>
          <div className="card__box--content__icons">
            {technologies.map((e: Tech): JSX.Element => {
              if (e.isChecked) {
                return technologiesFilter(e.value, e.id)
              }
              return <></>
            })}
          </div>
          <Button fn={(): any => {
            console.log(project.link);
            if (project.link !== '') {
              window.open(`http://${project.link}`, '_blank')
            }
          }}>
            {lang.buttonValue}
            <img
              src={forwardIcon}
              alt="forward_icon"
              className="button_forwardIcon"
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
