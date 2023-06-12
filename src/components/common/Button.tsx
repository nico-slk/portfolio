import { type ButtonProps } from '../../interfaces/types'

export const Button = ({
  nameClass,
  children,
  fn
}: ButtonProps): JSX.Element => {
  return (
    <button type="submit" className={`presentation--box__cvDownloadButton ${nameClass}`} onClick={fn}>
      {children}
    </button>
  )
}
