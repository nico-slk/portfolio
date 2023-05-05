import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from './firebase';

export const downloadResume = async (): Promise<void> => {
  const pathRef = ref(storage, 'resume/Nicolas Selicki CV 2023 EN.pdf');

  try {
    const url = await getDownloadURL(pathRef)
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
    };
    xhr.open('GET', url);
    xhr.send();
  } catch (error: any) {
    switch (error.code) {
      case 'storage/object-not-found':
        console.log('storage/object-not-found');

        break;
      case 'storage/unauthorized':
        console.log('storage/unauthorized');
        break;
      case 'storage/canceled':
        console.log('storage/canceled');
        break;

      case 'storage/unknown':
        console.log('storage/unknown');
        break;
    }
  }
}
