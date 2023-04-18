import computer from '../../assets/computer.svg';
import light from '../../assets/light.svg';

export const Introduction = () => {
  return (
    <div className="introduction borderSolid">
      <img src={computer} alt="computer image" />
      {/* <img src={light} alt="light image" className='light_image_background'/> */}
    </div>
  )
}
