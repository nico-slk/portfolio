import { type ButtonProps } from '../../interfaces/types'

export const Button = ({
  children,
  fn
}: ButtonProps): JSX.Element => {
  return (
    <button type="submit" className="presentation--box__cvDownloadButton" onClick={fn}>
      {children}
    </button>
  )
}
