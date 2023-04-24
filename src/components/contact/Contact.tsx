/* eslint-disable @typescript-eslint/no-unused-vars */
import { uploadFile, messageToEmail } from '../../services/firebase/contactMessageService'
import { useEffect, useState } from 'react'
import { type ContactForm } from '../../interfaces/types'
import { ContactLinks } from './ContactLinks'
import { checkAllowedFileFormat } from '../../customLodash/customLodash'
import { Button } from '../common/Button'

export const Contact = (): JSX.Element => {
  const [fileInfo, setFileInfo] = useState<JSX.Element>(<p className='fileMessage__normal'>No has seleccionado ningun archivo</p>)
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
      if (!checkAllowedFileFormat(file.name)) {
        setFileInfo(<p className='fileMessage__fileExtentionError'>El tipo de archivo no está permitido</p>)
        // throw new Error('The file extention is not allowed.');
        return
      }
      if (file.size > 625000) {
        setFileInfo(<p className='fileMessage__fileSizeError'>El archivo debe pesar menos de 5Mb</p>)
        // throw new Error('The file size should be less than 5Mb.');
        return
      }

      const fileName = file.name
      void uploadFile(file, fileName)
      event.target[3].value = '';
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
      setFileInfo(<p className='fileMessage__normal'>{event.target.files?.[0].name}</p>)
    } catch (error) {
      console.error('There was an error at upload file: ', error);
    }
  }

  useEffect(() => {
    if (formValues.file != null) {
      setFileInfo(<p className='fileMessage__normal'>{formValues.file.name}</p>)
    }
  }, [])

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
                <div className='form__input--buttons'>
                  <div>
                    <label htmlFor="fileInput" className='form__input--buttons__addFile'>
                      Subir archivo
                    </label>
                    <input className='' type="file" name="file" id="fileInput" onChange={handleFileChange} />
                    {fileInfo}
                  </div>
                  <Button fn={(): any => { }} >
                    ENVIAR
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
