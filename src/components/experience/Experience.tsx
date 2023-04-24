import { ExperienceDetail } from './ExperienceDetail'
import { FormationDetail } from './FormationDetail'

export const Experience = (): JSX.Element => {
  return (
    <div className='experience'>

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
