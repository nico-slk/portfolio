import ExperienceDetail from './ExperienceDetail'
import FormationDetail from './FormationDetail'

const Experience = (): JSX.Element => {
  // CUANDO REDUX-TOOLKIT O REACT-CONTEXT ESTÉN LISTOS, VOY A CREAR UN ESTADO GENERAL
  // DONDE VOY A SWITCHEAR ENTRE ESPAÑOL E INGLES, Y EN EL useEffect VOY A HACER UN "if"
  // Y CONSULTAR SI ESTÁ EN INGLÉS, QUE SETEE EL ESTADO LOCAL CON LA INFORMACION DEL CONTENIDO EN INGLES
  // SINO, EN ESPAÑOL. AL CLICKEAR EN 'ENGLISH', EL ESTADO GENERAL SE INVIERTE

  return (
    <div className='experience' id="experience">

      <div className='experience__titleBox'>
        <div className='experience__titleBox--underline'></div>
        <h1 className='experience__titleBox--title'>EXPERIENCIA</h1>
      </div>

      <div className="experience__box">
        <div className="experience__box--experienceDetail">
          <ExperienceDetail />
        </div>

        <div className='experience__formation'>
          <span className='experience__formation--title'>FORMACION</span>
          <div className="experience__formation--box">
            <FormationDetail />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Experience;
