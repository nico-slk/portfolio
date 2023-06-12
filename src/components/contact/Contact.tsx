/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { uploadFile, messageToEmail } from '../../services/firebase/contactMessageService'
import { getLanguage } from '../../services/firebase/languageService';
import { type ContactForm, type ButtonValue, type ContactDetailLanguage } from '../../interfaces/types'
import { ContactLinks } from './ContactLinks'
import { checkAllowedFileFormat } from '../../customLodash/customLodash'
import { Button } from '../common/Button'
import { connect } from 'react-redux'

const Contact = ({
  languages,
  getLanguage
}: any): JSX.Element => {
  const [formValues, setFormValues] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
    file: null
  })
  const [lang, setLang] = useState<ContactDetailLanguage>({
    fileTypeError: '',
    fileSizeError: '',
    noFileSelected: '',
    title: '',
    name: '',
    email: '',
    message: '',
    uploadFile: '',
    placeholderName: '',
    placeholderEmail: '',
    placeholderMessage: ''
  })
  const [fileInfo, setFileInfo] = useState<JSX.Element>(<></>)
  const [langButton, setLangButton] = useState<ButtonValue>({
    buttonValue: ''
  })

  const handleLanguageChange = (): void => {
    const esp: ContactDetailLanguage = {
      fileTypeError: 'El tipo de archivo no está permitido',
      fileSizeError: 'El archivo debe pesar menos de 5Mb',
      title: '¡CHARLEMOS!',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      uploadFile: 'SUBIR ARCHIVO',
      noFileSelected: 'No has seleccionado ningun archivo',
      placeholderName: 'Ingresa tu nombre. (Obligatorio)',
      placeholderEmail: 'Ingresa tu email. (Obligatorio)',
      placeholderMessage: 'Ingresa tu mensaje. (Obligatorio)'
    }
    const eng: ContactDetailLanguage = {
      fileTypeError: 'The file type is not allowed.',
      fileSizeError: 'The file size should be more than 5Mb',
      title: "LET'S TALK!",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      uploadFile: 'Upload file',
      noFileSelected: "You didn't select any file",
      placeholderName: 'Insert your name. (Mandatory)',
      placeholderEmail: 'Insert your email. (Mandatory)',
      placeholderMessage: 'Insert your message. (Mandatory)'
    }
    const espButton: ButtonValue = {
      buttonValue: 'ENVIAR'
    }
    const engButton: ButtonValue = {
      buttonValue: 'SEND'
    }

    if (languages.language === 'es') {
      setLang(esp)
      setLangButton(espButton)
      setFileInfo(<p className='fileMessage__normal'>{esp.noFileSelected}</p>)
    } else {
      setLang(eng)
      setLangButton(engButton)
      setFileInfo(<p className='fileMessage__normal'>{eng.noFileSelected}</p>)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement> | any): void => {
    event.preventDefault();
    const { name, email, message, file } = formValues

    if (file !== null) {
      if (!checkAllowedFileFormat(file.name)) {
        setFileInfo(<p className='fileMessage__fileExtentionError'>{lang.fileTypeError}</p>)
        return
      }
      if (file.size > 625000) {
        setFileInfo(<p className='fileMessage__fileSizeError'>{lang.fileSizeError}</p>)
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

  useEffect(() => {
    getLanguage()
    handleLanguageChange()
  }, [languages, getLanguage])

  return (
    <section className="contact" id="contact">
      <div className="contact__titleBox">
        <div className="contact__titleBox--underline"></div>
        <h1 className="contact__titleBox--title">{lang.title}</h1>
      </div>

      <div className="contact__box">
        <ContactLinks language={languages.language} />
        <div className="contact__formBox">
          <div className="contact__formBox--form">
            <form action="form" autoComplete="off" onSubmit={(event): void => { handleSubmit(event) }}>
              <div className="form__input">
                <label
                  htmlFor="nombre"
                  className="form__input--label"
                >
                  {lang.name}
                </label>
                <input
                  type="text"
                  className="form__input--name"
                  name="name"
                  id="nombre"
                  placeholder={lang.placeholderName}
                  required={true}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="form__input">
                <label
                  htmlFor="email"
                  className="form__input--label"
                >
                  {lang.email}
                </label>
                <input
                  type="email"
                  className="form__input--email"
                  name="email"
                  id="email"
                  placeholder={lang.placeholderEmail}
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <div className="form__textArea">
                <label
                  htmlFor="textArea"
                  className="form__textArea--textAreaLabel"
                >
                  {lang.message}
                </label>
                <textarea
                  className="form__textArea--message"
                  id="textArea"
                  name="message"
                  rows={5}
                  placeholder={lang.placeholderMessage}
                  required={true}
                  onChange={handleChange}
                />
                <div className='form__input--buttons'>
                  <div>
                    <label htmlFor="fileInput" className='form__input--buttons__addFile'>
                      {lang.uploadFile}
                    </label>
                    <input className='' type="file" name="file" id="fileInput" onChange={handleFileChange} />
                    {fileInfo}
                  </div>
                  <Button fn={(): any => { }} nameClass="submit" >
                    {langButton.buttonValue}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const stateToProp = (state: any): any => ({
  languages: state.languages
});

const dispatchToProp = {
  getLanguage
};

export default connect(stateToProp, dispatchToProp)(Contact);
