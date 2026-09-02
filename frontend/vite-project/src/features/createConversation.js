import api from "../utils/axious"

export const createConversation=async() => {
    try {
        const {data}=await api.post("/api/chat/create-conversation")
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}