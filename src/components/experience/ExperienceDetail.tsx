import { useEffect } from 'react'
import { connect } from 'react-redux';
import { type Experience_ES } from '../../interfaces/types';
import { getExperiencesES } from '../../services/firebase/experienceService';

const ExperienceDetail = (props: any): JSX.Element => {
  const { getExperiencesES, experience } = props;

  useEffect(() => {
    getExperiencesES()
  }, [getExperiencesES])

  return (
    (experience.isLoading === false)
      ? experience.experiences.map((e: Experience_ES): JSX.Element => (
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
      : <p>Loading...</p>
  )
}

const stateToProp = (state: any): any => ({
  experience: state.experience
});

const dispatchToProp = {
  getExperiencesES
};

export default connect(stateToProp, dispatchToProp)(ExperienceDetail);
