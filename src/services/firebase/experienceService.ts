import { type Experience_EN, type Experience_ES } from '../../interfaces/types';
import { db } from '../../services/firebase/firebase'
import { type DocumentData, type QueryDocumentSnapshot, collection, getDocs } from 'firebase/firestore'
import actions from '../../redux/features/experience/experienceSlice'

export const getExperiencesES = (): any => async (dispatch: any): Promise<void> => {
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
  dispatch(actions.getExperiences(docArr));
}

export const getExperiencesEN = (): any => async (dispatch: any): Promise<void> => {
  const dbRef = collection(db, 'experiences_EN');
  const docArr: Experience_EN[] = []
  const docsResponse = await getDocs(dbRef)
  docsResponse.forEach((doc: QueryDocumentSnapshot<DocumentData>): void => {
    docArr.push({
      company: doc.data().company,
      position: doc.data().position,
      startDate_EN: doc.data().startDate_EN,
      endDate_EN: doc.data().endDate_EN,
      description_EN: doc.data().description_EN
    })
  })
  dispatch(actions.getExperiences(docArr));
}
