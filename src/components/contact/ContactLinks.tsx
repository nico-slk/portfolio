import { HiOutlineMail } from 'react-icons/hi'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export const ContactLinks = (): JSX.Element => {
  return (
    <div className="contact__message">
      <div className="contact__message--textMessage">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestias vero facilis impedit repudiandae at commodi
        perspiciatis aspernatur ipsam obcaecati debitis tempore
        assumenda, similique nesciunt magni quam expedita animi
        temporibus veritatis.
      </div>
      <div className="contact__message--links">
        <ul>
          <li>
            <a href="#">
              <SiGithub /> <p>nico-slk</p>
            </a>
          </li>
          <li>
            <a href="mailto:">
              <HiOutlineMail />
              <p>nicolas.selicki@gmail.com</p>
            </a>
          </li>
          <li>
            <a href="#">
              <SiLinkedin /> <p>Nicolas Selicki</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
