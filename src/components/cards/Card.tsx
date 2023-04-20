import { SiMysql, SiPostgresql, SiRedux } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import forwardIcon from '../../assets/forwardIcon.svg'

const Card = (): JSX.Element => {
  const techs = [<SiMysql key={'SiMysql'} />, <SiRedux key={'SiRedux'} />, <SiPostgresql key={'SiPostgresql'} />, <FaJava key={'FaJava'} />]

  return (
    <div className="card">
      <div className="card__box">
        <div className="card__box--content">
          <h4 className="card__box--content__title">
            Web page example
          </h4>
          <p className="card__box--content__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, atque. Asperiores numquam, veniam ad
            laborum sit harum consequatur, dolorum magnam mollitia
            odio perferendis! Laborum facere qui vel accusantium
            doloremque magnam.
          </p>
          <div className="card__box--content__icons">
            {techs.map((tech) => tech)}
          </div>
          <button
            type="submit"
            className="card__box--content__button"
          >
            VER PROYECTO
            <img
              src={forwardIcon}
              alt="forward_icon"
              className="button_forwardIcon"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;
