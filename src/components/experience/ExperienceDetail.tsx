import { type Experience_ES } from '../../interfaces/types';

export const ExperienceDetail = (props: any): JSX.Element => {
  return (
    props.experiences_ES.map((e: Experience_ES): JSX.Element => (
      <div className='experience__box--experienceDetail--lastExperience' key={e.position}>
        <div className='lastCompany' >
          <span className='lastCompany__role'>{e.position.toUpperCase()}</span>
          <div className='lastCompany__underline'></div>
          <span className='lastCompany__companyName'>{e.company.toUpperCase()}</span>
        </div>
        <div className='date'>{e.startDate_ES} - {e.endDate_ES}</div>
        <div className='description'>
          {e.description_ES}
        </div>
      </div>
    ))
  )
}
