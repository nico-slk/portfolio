import downloadCV from '../../assets/downloadCV.svg';
import { Button } from '../common/Button';

export const Presentation = (): JSX.Element => {
  return (
    <div className='presentation'>
      <div className='presentation__content'>
        <div className="presentation--box">
          <h4 className="presentation--box__myName">
            Hola, soy  Nicolás Selicki <div className="presentation--box__myName--underline"></div>
          </h4>
          <h1 className="presentation--box__myTitle">
            FULL STACK DEVELOPER
          </h1>
          <p className="presentation--box__myDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, atque. Asperiores numquam, veniam ad laborum sit harum consequatur, dolorum magnam mollitia odio perferendis! Laborum facere qui vel accusantium doloremque magnam.
          </p>
          <Button fn={(): any => { }} >
            Descargar CV  <img src={downloadCV} alt="" />
          </Button>
        </div>
      </div>
    </div>
  )
}
