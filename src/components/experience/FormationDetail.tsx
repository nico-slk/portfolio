import { type Formation_ES } from '../../interfaces/types'

export const FormationDetail = (props: any): JSX.Element => {
  return props.formation_ES.map((e: Formation_ES) => {
    return (
      <div className="listItem" key={e.title}>
        <span className="listItem__year">{(e.year.length > 0) ? e.year : 'XXXX'}</span>
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
    )
  })
}
