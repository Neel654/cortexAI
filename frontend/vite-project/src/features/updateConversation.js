import api from "../utils/axious"

export const updateConversation=async(payload) => {
    try {
        const {data}=await api.post("/api/chat/update-conversation", payload)
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}