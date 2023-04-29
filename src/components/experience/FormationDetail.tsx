import { useEffect } from 'react'
import { connect } from 'react-redux';
import { type Formation_ES } from '../../interfaces/types'
import { getFormationES } from '../../services/firebase/formationService';

const FormationDetail = ({ getFormationES, formation }: any): JSX.Element => {
  useEffect(() => {
    getFormationES()
  }, [getFormationES])

  return (
    (formation.isLoading === false)
      ? formation.formation.map((e: Formation_ES): JSX.Element => (
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
                {e.organization_ES.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      ))
      : <p>Loading...</p>
  )
}

const stateToProp = (state: any): any => ({
  formation: state.formation
});

const dispatchToProp = {
  getFormationES
};

export default connect(stateToProp, dispatchToProp)(FormationDetail);
