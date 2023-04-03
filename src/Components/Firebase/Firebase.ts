import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBEROZE5z6di_RP9LlWDgV9dgl1ImYOEHQ',
  authDomain: 'crypto-project-b461e.firebaseapp.com',
  projectId: 'crypto-project-b461e',
  storageBucket: 'crypto-project-b461e.appspot.com',
  messagingSenderId: '1049773235878',
  appId: '1:1049773235878:web:a3c7e20b023a3069c79e67',
}

const firebaseSetup = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseSetup)
export default firebaseSetup
