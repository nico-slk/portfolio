
import { type Formation_EN, type Formation_ES } from '../../interfaces/types'
import { type DocumentData, type QueryDocumentSnapshot, collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase'
import actions from '../../redux/features/experience/formationSlice'

export const getFormationES = (): any => async (dispatch: any): Promise<void> => {
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
  dispatch(actions.getExperiences(docArr));
}

export const getFormationEN = (): any => async (dispatch: any): Promise<void> => {
  const dbRef = collection(db, 'formation_ES');
  const docArr: Formation_EN[] = []
  const docsResponse = await getDocs(dbRef)
  docsResponse.forEach((doc: QueryDocumentSnapshot<DocumentData>): void => {
    docArr.push({
      year: doc.data().year,
      title: doc.data().title,
      organization_EN: doc.data().organization_EN
    })
  })
  dispatch(actions.getExperiences(docArr));
}
