import { type ButtonProps } from '../../interfaces/types'

export const Button = (props: ButtonProps): JSX.Element => {
  const { children, fn } = props;

  return (
    <button type="submit" className="presentation--box__cvDownloadButton" onClick={fn}>
      {children}
    </button>
  )
}
