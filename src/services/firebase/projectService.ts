import { type Project } from '../../interfaces/types';
import { db } from '../../services/firebase/firebase'
import { type DocumentData, type QueryDocumentSnapshot, collection, getDocs } from 'firebase/firestore'
import actions from '../../redux/features/experience/projectCardsSlice'

export const getAllProjects = (): any => async (dispatch: any): Promise<void> => {
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

  dispatch(actions.getProjects(docArr));
}
