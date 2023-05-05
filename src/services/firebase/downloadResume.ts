import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from './firebase';

export const downloadResume = async (): Promise<string> => {
  const gsReference = ref(storage, 'gs://portfolio-slk2023.appspot.com/resume/Nicolas Selicki CV 2023 EN.pdf');
  let urlFile = ''

  await getDownloadURL(gsReference)
    .then((url) => {
      urlFile = url
    })
    .catch((error) => {
      console.error(error);
    });

  return urlFile;
}
