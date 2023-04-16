import gitHubLogo from '../../assets/gitHub.svg';
import message from '../../assets/message.svg';
import linkedInLogo from '../../assets/linkedInLogo.svg';
import arrow1 from '../../assets/arrow1.svg';

export const SideBar = () => {
  return (
    <div className="floating-sidebar">

        <a href="http://" target="_blank" rel="noopener noreferrer" className="sidebar-icon-link">
            <img src={arrow1} alt="back_home" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer" className="sidebar-icon-link">
            <img src={gitHubLogo} alt="gitHubLogo" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer" className="sidebar-icon-link">
            <img src={message} alt="message" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer" className="sidebar-icon-link">
            <img src={linkedInLogo} alt="linkedInLogo" />
        </a>
        <div className="floating-sidebar__vertical-line"></div>
    </div>
  )
}
