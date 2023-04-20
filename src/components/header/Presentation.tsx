import downloadCV from '../../assets/downloadCV.svg';

export const Presentation = (): JSX.Element => {
  return (
    <div className='presentation borderSolid'>
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
          <button type="submit" className="presentation--box__cvDownloadButton">
            DESCARGAR CV <img src={downloadCV} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}
