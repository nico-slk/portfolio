import { uploadFile, messageToEmail } from '../../services/firebase/contactMessageService'
import { useState } from 'react'
import { type ContactForm } from '../../interfaces/types'
import { ContactLinks } from './ContactLinks'
import { checkAllowedFileFormat } from '../../customLodash/customLodash'

export const Contact = (): JSX.Element => {
  const [formValues, setFormValues] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
    file: null
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { name, email, message, file } = formValues

    if (file !== null) {
      if (file.size > 625000) {
        throw new Error('The file size should be less than 5Mb.');
      }
      if (!checkAllowedFileFormat(file.name)) {
        throw new Error('The file extention is not allowed.');
      }
      console.log(file);
      const fileName = file.name
      void uploadFile(file, fileName)
      event.target[3].value = '';
      console.log(event);
      void messageToEmail(email, name, message, file.name);
    } else {
      void messageToEmail(email, name, message, '');
    }

    setFormValues({
      name: '',
      email: '',
      message: '',
      file: null
    })

    event.target[0].value = '';
    event.target[1].value = '';
    event.target[2].value = '';
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    try {
      setFormValues({
        ...formValues,
        [event.target.name]: event.target.files?.[0]
      });
    } catch (error) {
      console.error('There was an error at upload file: ', error);
    }
  }

  return (
    <div className="contact">
      <div className="contact__titleBox">
        <div className="contact__titleBox--underline"></div>
        <h1 className="contact__titleBox--title">¡CHARLEMOS!</h1>
      </div>

      <div className="contact__box">
        <ContactLinks />
        <div className="contact__formBox">
          <div className="contact__formBox--form">
            <form action="form" autoComplete="off" onSubmit={(event): void => { handleSubmit(event) }}>
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
                  name="name"
                  id="nombre"
                  placeholder="Ingresa tu nombre. (Obligatorio)"
                  // required={true}
                  onChange={handleChange}
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
                  name="email"
                  id="email"
                  placeholder="Ingresa tu email. (Obligatorio)"
                  // required={true}
                  onChange={handleChange}
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
                  name="message"
                  rows={5}
                  placeholder="Ingresa tu mensaje. (Obligatorio)"
                  // required={true}
                  onChange={handleChange}
                />
                <input type="file" name="file" id="" onChange={handleFileChange} />
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
