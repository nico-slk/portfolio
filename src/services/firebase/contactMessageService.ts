import { ref, uploadBytes } from 'firebase/storage';
import { db, storage } from './firebase';
import { setDoc, doc } from 'firebase/firestore';

export const uploadFile = async (file: any, fileName: string): Promise<void> => {
  const storageRef = ref(storage, `images/${fileName}`);
  try {
    await uploadBytes(storageRef, file)
  } catch (error) {
    console.log(error)
  }
}

export const messageToEmail = async (email: string, subject: string, body: string, fileName: string): Promise<void> => {
  const collectionRef = doc(db, 'mail', subject.replaceAll(' ', '_'));

  const mailContent = {
    to: ['nicolas.selicki@gmail.com'],
    message: {
      subject: `From: ${email}`,
      text: body
      // html: 'This is the <code>HTML</code> section of the email body.'
    },
    file: fileName ?? ''
  }

  try {
    await setDoc(collectionRef, mailContent)
    console.log('Mail sended!');
  } catch (error) {
    console.error('Error: ', error);
  }
}

// export const writeUserData = async (
//   userId: string,
//   name: string,
//   lastName: string,
//   age: number
// ): Promise<void> => {
//   const testData = {
//     id: userId,
//     name,
//     lastName,
//     age
//   }
//   const dbRef = doc(db, 'test', testData.id);

//   await setDoc(dbRef, testData)
//   console.log('Data test created!');
// }
