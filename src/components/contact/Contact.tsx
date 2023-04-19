// import { HiOutlineMail } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";

export const Contact = () => {
  return (
    <div className='contact'>

      <div className='contact__titleBox'>
        <div className='contact__titleBox--underline'></div>
        <h1 className='contact__titleBox--title'>¡CHARLEMOS!</h1>
      </div>

      <div className='contact__box'>
        <div className='contact__message'>
          <div className='contact__message--textMessage'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vero facilis impedit repudiandae at commodi perspiciatis aspernatur ipsam obcaecati debitis tempore assumenda, similique nesciunt magni quam expedita animi temporibus veritatis.
          </div>
          <div className='contact__message--links'>
            <ul>
              <li> <a href="#"> <SiGithub /> <p>nico-slk</p> </a> </li>
              <li> <a href="mailto:"> <HiOutlineMail /> <p>nicolas.selicki@gmail.com</p> </a> </li>
              <li> <a href="#"> <SiLinkedin /> <p>Nicolas Selicki</p> </a > </li>
            </ul>
          </div>
        </div>

        <div className='contact__formBox'>
          <div className='contact__formBox--form'>
            <form action='form' autoComplete="off" >
              <div className='form__input'>
                <label htmlFor='nombre' className='form__input--label'>Nombre</label>
                <input type='text' className='form__input--name' id='nombre' placeholder="Ingresa tu nombre." autoComplete='off' />
              </div>
              <div className='form__input'>
                <label htmlFor='email' className='form__input--label'>Email</label>
                <input type='email' className='form__input--email' id='email' placeholder="Ingresa tu email." />
              </div>
              <div className='form__textArea'>
                <label htmlFor="textArea" className="form__textArea--textAreaLabel">Message</label>
                <textarea className="form__textArea--message" id="textArea" rows={5} placeholder="Ingresa tu mensaje." />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
