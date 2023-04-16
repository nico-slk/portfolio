import { Presentation } from './Presentation'
import { Introduction } from './Introduction'

export const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header--presentation">
          <Presentation />
        </div>
        <div className="header--introduction">
          <Introduction />
        </div>
      </div>
    </div>
  )
}
