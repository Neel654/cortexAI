import api from '../utils/axious'

async function sendMessage(payload) {
  try {
    const {data}=await api.post("/api/agent/chat",payload)
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export default sendMessage