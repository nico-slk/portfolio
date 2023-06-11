import downloadCV from '../../assets/downloadCV.svg';
import { downloadResume } from '../../services/firebase/downloadResume';
import { Button } from '../common/Button';

export const Presentation = ({
  langButton,
  information,
  language
}: any): JSX.Element => {
  return (
    <div className='presentation'>
      <div className="presentation--box">
        <h4 className="presentation--box__myName">
          {information.preTitle}  Nicolás Selicki <div className={`presentation--box__myName--${language === 'es' ? 'underline' : 'underlineEN'}`}></div>
        </h4>
        <h1 className="presentation--box__myTitle">
          FULL STACK DEVELOPER
        </h1>
        <p className="presentation--box__myDescription">
          {information.presentationMessage}
        </p>
        <Button fn={async (): Promise<any> => {
          window.open(await downloadResume(), '_blank')
        }} >
          {langButton.buttonValue}  <img src={downloadCV} alt="" />
        </Button>
      </div>
    </div>
  )
}
