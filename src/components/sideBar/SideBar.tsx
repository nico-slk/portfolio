import gitHubLogo from '../../assets/gitHub.svg';
import message from '../../assets/message.svg';
import linkedInLogo from '../../assets/linkedInLogo.svg';
import arrow1 from '../../assets/arrow1.svg';

export const SideBar = (): JSX.Element => {
  const handleNavigation = (x: number, y: number): void => {
    window.scroll(x, y)
  }

  return (
    <aside className="floating-sidebar">
      <ul className="floating-sidebar--ul">
        <li>
          <div className="sidebar-icon-link-div back_home" onClick={(): void => { handleNavigation(0, 0); }}>
            <img src={arrow1} alt="back_home" />
          </div>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="sidebar-icon-link gitHubLogo">
            <img src={gitHubLogo} alt="gitHubLogo" />
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="sidebar-icon-link message">
            <img src={message} alt="message" />
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="sidebar-icon-link linkedInLogo">
            <img src={linkedInLogo} alt="linkedInLogo" />
          </a>
        </li>
      </ul>
      <div className="floating-sidebar__vertical-line"></div>
    </aside>
  )
}
