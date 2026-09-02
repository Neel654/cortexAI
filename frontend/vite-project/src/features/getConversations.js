import api from "../utils/axious"

export const getConversations=async() => {
    try {
        const {data}=await api.get("/api/chat/get-conversation")
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}