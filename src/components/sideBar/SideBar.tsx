import gitHubLogo from '../../assets/gitHub.svg';
import message from '../../assets/message.svg';
import linkedInLogo from '../../assets/linkedInLogo.svg';
import arrow1 from '../../assets/arrow1.svg';

export const SideBar = () => {
    return (
        <div className="floating-sidebar">
            <ul className="floating-sidebar--ul">
                <li className=''>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="sidebar-icon-link ">
                        <img src={arrow1} alt="back_home" />
                    </a>
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
