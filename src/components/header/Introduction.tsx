import computer from '../../assets/computer.svg';
// import light from '../../assets/light.svg';

export const Introduction = (): JSX.Element => {
  return (
    <div className="introduction">
      <img src={computer} alt="computer image" />
      {/* <img src={light} alt="light image" className='light_image_background'/> */}
    </div>
  )
}
