import Card from './Card'
import { type Tech, type Project } from '../../interfaces/types'
import { type DocumentData, type QueryDocumentSnapshot, collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase'
import { useEffect, useState } from 'react'

export const CardList = (): JSX.Element => {
  const [projects, setProjects] = useState<Project[]>([])
  const [t, setT] = useState<Tech[]>([])

  const getProjects = async (): Promise<Project[]> => {
    const dbRef = collection(db, 'project');
    const docArr: Project[] = []
    const docsResponse = await getDocs(dbRef)
    docsResponse.forEach((doc: QueryDocumentSnapshot<DocumentData>): void => {
      docArr.push({
        name: doc.data().name,
        description: doc.data().description,
        technologies: doc.data().technologies
      })
    })
    return docArr;
  }

  useEffect(() => {
    void getProjects()
      .then((res) => {
        setProjects(res)
        res.forEach(project => {
          const docArrT: Tech[] = []
          project.technologies.forEach(t => {
            docArrT.push({
              id: t.id,
              value: t.value,
              isChecked: t.isChecked
            })
          })
          setT(docArrT)
        })
      })
  }, [])

  return (
    <div className='cardList'>
      <div className='cardList__titleBox'>
        <div className='cardList__titleBox--underline'></div>
        <h1 className='cardList__titleBox--title'>PROYECTOS</h1>
      </div>
      <div className='cardList__list'>
        {projects.map(project => <Card project={project} key={project.name} t={t} />)}
      </div>
    </div>
  )
}
