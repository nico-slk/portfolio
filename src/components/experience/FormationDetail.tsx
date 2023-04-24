
export const FormationDetail = (): JSX.Element => {
  return (
    <div className="listItem">
      <span className="listItem__year">2020</span>
      <div className="listItem__stickAndPoint">
        <div className="listItem__stickAndPoint--point"></div>
        <div className="listItem__stickAndPoint--stick"></div>
      </div>
      <div className="listItem__formationInfo">
        <span className="listItem__formationInfo--title">
          DESARROLLO FULLSTACK CON REACT+JAVA
        </span>
        <div className="listItem__formationInfo--trainer">
          <div className="trainer__stick"></div>
          <span className="trainer__name">
            PROGRAMA DIGITALERS - TELECOM + EDICACIÓN IT
          </span>
        </div>
      </div>
    </div>
  )
}
