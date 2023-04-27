import { useState, useEffect } from 'react'
import { ExperienceDetail } from './ExperienceDetail'
import { FormationDetail } from './FormationDetail'
import { db } from '../../services/firebase/firebase'
import { type DocumentData, type QueryDocumentSnapshot, collection, getDocs } from 'firebase/firestore'
import { type Experience_ES, type Formation_ES } from '../../interfaces/types'

const Experience = (): JSX.Element => {
  const [experiences, setExperiences] = useState<Experience_ES[]>([])
  const [formationES, setFormationES] = useState<Formation_ES[]>([])

  const getExperiences = async (): Promise<Experience_ES[]> => {
    const dbRef = collection(db, 'experiences_ES');
    const docArr: Experience_ES[] = []
    const docsResponse = await getDocs(dbRef)
    docsResponse.forEach((doc: QueryDocumentSnapshot<DocumentData>): void => {
      docArr.push({
        company: doc.data().company,
        position: doc.data().position,
        startDate_ES: doc.data().startDate_ES,
        endDate_ES: doc.data().endDate_ES,
        description_ES: doc.data().description_ES
      })
    })
    return docArr;
  }

  const getFormation = async (): Promise<Formation_ES[]> => {
    const dbRef = collection(db, 'formation_ES');
    const docArr: Formation_ES[] = []
    const docsResponse = await getDocs(dbRef)
    docsResponse.forEach((doc: QueryDocumentSnapshot<DocumentData>): void => {
      docArr.push({
        year: doc.data().year,
        title: doc.data().title,
        organization_ES: doc.data().organization_ES
      })
    })
    return docArr;
  }

  useEffect(() => {
    void getExperiences()
      .then((res) => { setExperiences(res); })

    void getFormation()
      .then((res) => {
        setFormationES(res);
      })
  }, [])

  // CUANDO REDUX-TOOLKIT O REACT-CONTEXT ESTÉN LISTOS, VOY A CREAR UN ESTADO GENERAL
  // DONDE VOY A SWITCHEAR ENTRE ESPAÑOL E INGLES, Y EN EL useEffect VOY A HACER UN "if"
  // Y CONSULTAR SI ESTÁ EN INGLÉS, QUE SETEE EL ESTADO LOCAL CON LA INFORMACION DEL CONTENIDO EN INGLES
  // SINO, EN ESPAÑOL. AL CLICKEAR EN 'ENGLISH', EL ESTADO GENERAL SE INVIERTE

  return (
    <div className='experience'>

      <div className='experience__titleBox'>
        <div className='experience__titleBox--underline'></div>
        <h1 className='experience__titleBox--title'>EXPERIENCIA</h1>
      </div>

      <div className="experience__box">
        <div className="experience__box--experienceDetail">
          <ExperienceDetail experiences_ES={experiences} />
        </div>

        <div className='experience__formation'>
          <span className='experience__formation--title'>FORMACION</span>
          <div className="experience__formation--box">
            <FormationDetail formation_ES={formationES} />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Experience;
