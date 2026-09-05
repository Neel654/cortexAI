import MessageList from "./MessageList"
import Nav from "./Nav"
import ChatInput from "./ChatInput"

function ChatArea() {
  return (
    <div className='flex-1 flex flex-col'>
        <Nav/>
        <MessageList/>
        <ChatInput/>

        </div>
  )
}

export default ChatArea