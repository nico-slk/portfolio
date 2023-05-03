// import { SiMysql, SiPostgresql, SiRedux } from 'react-icons/si'
// import { FaJava } from 'react-icons/fa'
import forwardIcon from '../../assets/forwardIcon.svg'
import { type ButtonValue, type Tech } from '../../interfaces/types';
import { Button } from '../common/Button'
import { useEffect, useState } from 'react';

const Card = ({
  project,
  technologies,
  language
}: any): JSX.Element => {
  // const techs = [<SiMysql key={'SiMysql'} />, <SiRedux key={'SiRedux'} />, <SiPostgresql key={'SiPostgresql'} />, <FaJava key={'FaJava'} />]
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

  useEffect(() => {
    handleLanguageChange()
  }, [language])

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
            {/* {techs.map((tech) => tech)} */}
            {technologies.map((e: Tech) => e.id)}
          </div>
          <Button fn={(): any => { }} >
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

export default Card;
