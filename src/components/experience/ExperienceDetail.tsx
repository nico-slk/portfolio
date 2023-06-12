import { type ReactElement, useEffect } from 'react'
import { connect } from 'react-redux';
import { getExperiencesEN, getExperiencesES } from '../../services/firebase/experienceService';
import { getLanguage } from '../../services/firebase/languageService';

const ExperienceDetail = ({
  getExperiencesES,
  getExperiencesEN,
  experience,
  languages,
  getLanguage
}: any): ReactElement<JSX.Element | JSX.Element[]> => {
  const handleLanguageChange = async (): Promise<void> => {
    if (languages.language === 'es') {
      getExperiencesES()
    } else {
      getExperiencesEN()
    }
  }

  useEffect(() => {
    getLanguage()
    void handleLanguageChange()
  }, [languages])

  if (experience.experiences.length <= 0) {
    return <p>Loading...</p>
  }

  if (languages.language === 'es') {
    return <>
      {experience.experiences.map((e: any): JSX.Element =>
        <div className='experience__box--experienceDetail--lastExperience' key={e.position}>
          <div className='lastCompany' >
            <span className='lastCompany__role'>{e.position.toUpperCase()}</span>
            <div className='lastCompany__underline-companyName'>
              <div className='lastCompany__underline'></div>
              <span className='lastCompany__companyName'>{e.company.toUpperCase()}</span>
            </div>
          </div>
          <div className='date'>{e.startDate_ES} - {e.endDate_ES}</div>
          <div className='description'>
            {e.description_ES}
          </div>
        </div>
      )}
    </>
  }

  if (languages.language === 'en') {
    return <>
      {experience.experiences.map((e: any): JSX.Element =>
        <div className='experience__box--experienceDetail--lastExperience' key={e.position}>
          <div className='lastCompany' >
            <span className='lastCompany__role'>{e.position.toUpperCase()}</span>
            <div className='lastCompany__underline'></div>
            <span className='lastCompany__companyName'>{e.company.toUpperCase()}</span>
          </div>
          <div className='date'>{e.startDate_EN} - {e.endDate_EN}</div>
          <div className='description'>
            {e.description_EN}
          </div>
        </div>
      )}
    </>
  }

  return <></>
}

const stateToProp = (state: any): any => ({
  experience: state.experience,
  languages: state.languages
});

const dispatchToProp = {
  getExperiencesES,
  getExperiencesEN,
  getLanguage
};

export default connect(stateToProp, dispatchToProp)(ExperienceDetail);
