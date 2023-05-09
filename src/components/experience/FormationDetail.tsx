import { type ReactElement, useEffect } from 'react'
import { connect } from 'react-redux';
import { getFormationES, getFormationEN } from '../../services/firebase/formationService';
import { getLanguage } from '../../services/firebase/languageService';

const FormationDetail = ({
  getFormationES,
  getFormationEN,
  formation,
  languages,
  getLanguage
}: any): ReactElement<JSX.Element | JSX.Element[]> => {
  const handleLanguageChange = async (): Promise<void> => {
    if (languages.language === 'es') {
      getFormationES()
    } else {
      getFormationEN()
    }
  }

  useEffect(() => {
    getLanguage()
    void handleLanguageChange()
  }, [getLanguage, languages])

  if (formation.isLoading === true && formation.formation.length <= 0) {
    return <p>Loading...</p>
  }

  if (languages.language === 'es') {
    return <>
      {formation.formation.map((e: any): JSX.Element =>
        <div className="listItem" key={e.title}>
          <span className="listItem__year">{(e.year.length > 0) ? e.year : 'xxxx'}</span>
          <div className="listItem__stickAndPoint">
            <div className="listItem__stickAndPoint--point"></div>
            <div className="listItem__stickAndPoint--stick"></div>
          </div>
          <div className="listItem__formationInfo">
            <span className="listItem__formationInfo--title">
              {e.title.toUpperCase()}
            </span>
            <div className="listItem__formationInfo--trainer">
              <div className="trainer__stick"></div>
              <span className="trainer__name">
                {e.organization_ES?.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  }

  if (languages.language === 'en') {
    return <>
      {
        formation.formation.map((e: any): JSX.Element =>
          <div className="listItem" key={e.title}>
            <span className="listItem__year">{(e.year.length > 0) ? e.year : 'xxxx'}</span>
            <div className="listItem__stickAndPoint">
              <div className="listItem__stickAndPoint--point"></div>
              <div className="listItem__stickAndPoint--stick"></div>
            </div>
            <div className="listItem__formationInfo">
              <span className="listItem__formationInfo--title">
                {e.title.toUpperCase()}
              </span>
              <div className="listItem__formationInfo--trainer">
                <div className="trainer__stick"></div>
                <span className="trainer__name">
                  {e.organization_EN?.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        )}
    </>
  }

  return <></>
}

const stateToProp = (state: any): any => ({
  formation: state.formation,
  languages: state.languages
});

const dispatchToProp = {
  getFormationES,
  getFormationEN,
  getLanguage
};

export default connect(stateToProp, dispatchToProp)(FormationDetail);
