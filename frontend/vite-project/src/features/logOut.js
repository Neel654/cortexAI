import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import api from '../utils/axious'

async function logOut() {
  try {
    const {data}=await api.get("/api/auth/logout")
    await signOut(auth)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export default logOut