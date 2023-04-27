import gitHubLogo from '../../assets/gitHub.svg';
import message from '../../assets/message.svg';
import linkedInLogo from '../../assets/linkedInLogo.svg';
import arrow1 from '../../assets/arrow1.svg';

export const SideBar = (): JSX.Element => {
  const handleNavigation = (x: number, y: number): void => {
    window.scroll(x, y)
  }

  return (
    <div className="floating-sidebar">
      <ul className="floating-sidebar--ul">
        <li className=''>
          <div className="sidebar-icon-link-div " onClick={(): void => { handleNavigation(0, 0); }}>
            <img src={arrow1} alt="back_home" />
          </div>
        </li>
        <li className=''>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="sidebar-icon-link ">
            <img src={gitHubLogo} alt="gitHubLogo" />
          </a>
        </li>
        <li className=''>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="sidebar-icon-link ">
            <img src={message} alt="message" />
          </a>
        </li>
        <li className=''>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="sidebar-icon-link ">
            <img src={linkedInLogo} alt="linkedInLogo" />
          </a>
        </li>
      </ul>
      <div className="floating-sidebar__vertical-line"></div>
    </div>
  )
}
