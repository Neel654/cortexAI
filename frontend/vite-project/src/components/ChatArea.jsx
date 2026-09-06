import MessageList from "./MessageList"
import Nav from "./Nav"
import ChatInput from "./ChatInput"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import getMessages from "../features/getMessages"
import { setMessages } from "../redux/messageSlice"

function ChatArea() {
    const {selectedConversation} =useSelector(state=>state.conversation)
    const dispatch=useDispatch()
    useEffect(()=>{
        if(selectedConversation){
            if(selectedConversation.title=="New Chat")
                return;
            const getMesg=async()=>{
                const data=await getMessages(selectedConversation?._id)
                dispatch(setMessages(data))
            }
            getMesg()
        }
    },[selectedConversation?._id])
  return (
    <div className='flex-1 flex flex-col'>
        <Nav/>
        <MessageList/>
        <ChatInput/>

        </div>
  )
}

export default ChatArea