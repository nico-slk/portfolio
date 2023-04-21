import { HiOutlineMail } from 'react-icons/hi'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { firebaseTest } from '../../services/firebase/firebase'
import { useState } from 'react'

export const Contact = (): JSX.Element => {
  const [file, setFile] = useState<React.ChangeEvent<HTMLInputElement>>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, file: any): void => {
    event.preventDefault();
    const { files } = file.target
    if (files !== null) {
      const fileName = files[0].name
      void firebaseTest(files[0], fileName);
    } else {
      console.error('There was an error at upload file');
    }
  }

  return (
    <div className="contact">
      <div className="contact__titleBox">
        <div className="contact__titleBox--underline"></div>
        <h1 className="contact__titleBox--title">¡CHARLEMOS!</h1>
      </div>

      <div className="contact__box">
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

        <div className="contact__formBox">
          <div className="contact__formBox--form">
            <form action="form" autoComplete="off" onSubmit={(event): void => { handleSubmit(event, file) }}>
              <div className="form__input">
                <label
                  htmlFor="nombre"
                  className="form__input--label"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="form__input--name"
                  id="nombre"
                  placeholder="Ingresa tu nombre."
                  autoComplete="off"
                />
              </div>
              <div className="form__input">
                <label
                  htmlFor="email"
                  className="form__input--label"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form__input--email"
                  id="email"
                  placeholder="Ingresa tu email."
                />
              </div>
              <div className="form__textArea">
                <label
                  htmlFor="textArea"
                  className="form__textArea--textAreaLabel"
                >
                  Message
                </label>
                <textarea
                  className="form__textArea--message"
                  id="textArea"
                  rows={5}
                  placeholder="Ingresa tu mensaje."
                />
                <input type="file" name="" id="" onChange={setFile} />
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
