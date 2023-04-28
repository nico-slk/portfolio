// import { SiMysql, SiPostgresql, SiRedux } from 'react-icons/si'
// import { FaJava } from 'react-icons/fa'
import forwardIcon from '../../assets/forwardIcon.svg'
import { type Tech } from '../../interfaces/types';
import { Button } from '../common/Button'

const Card = (props: any): JSX.Element => {
  // const techs = [<SiMysql key={'SiMysql'} />, <SiRedux key={'SiRedux'} />, <SiPostgresql key={'SiPostgresql'} />, <FaJava key={'FaJava'} />]

  return (
    <div className="card">
      <div className="card__box">
        <div className="card__box--content">
          <h4 className="card__box--content__title">
            {props.project.name}
          </h4>
          <p className="card__box--content__description">
            {props.project.description}
          </p>
          <div className="card__box--content__icons">
            {/* {techs.map((tech) => tech)} */}
            {props.technologies.map((e: Tech) => e.id)}
          </div>
          <Button fn={(): any => { }} >
            VER PROYECTO
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
