import { useSelector } from 'react-redux'


function MessageList() {
    const{selectedConversation}=useSelector(state=>state.conversation)
    const{messages}=useSelector(state=>state.message)
  return (
    <div className='flex-1 overflow-y-auto px-6 py-6 space-y-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
        {messages.length==0 || !selectedConversation ?(
            <div className='h-full flex flex-col items-center justify-center gap-4 text-center'>
                <div className='flex flex-col gap-1.5'>
                <h1>CortexAI</h1>
                <p>How can I help you?</p>
                <p>Ask me anything - codes, ideas, explanations, or just a quick question.</p>
                </div>
            </div>
        ):
        <div></div>
        }
    </div>
  )
}

export default MessageList