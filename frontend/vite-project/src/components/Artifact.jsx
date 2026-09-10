import { PanelRightClose, Code2 } from 'lucide-react'
import { useSelector } from 'react-redux'
function Artifact() {
    const {artifacts} = useSelector(state=>state.message)
  return (
    <div className='hidden lg:flex h-full border-1 border-white/[0.06] flex-col overflow-hidden shrink-0 w-[250px]'>
        <div className='flex flex-col h-full bg-[#0d0f14]'>
            <div className='h-14 px-4 border-b border-white/[0.06] flex items-center gap-3 shrink-0'>
                <button className='flex items-center justify-center w-7 h-7 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/[0.05] transition-colors duration-150 bg-transparent border-none cursor-pointer shrink-0'>
                    <PanelRightClose size={16}/>
                </button>
                <div className='flex items-center gap-2 flex-1 min-w-0'>
                    <div>
                        <Code2 size={16}/>
                    </div>
                    <div className='text-sm font-medium text-slate-200 truncate'>{artifacts[0]?.title || "Artifacts"}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Artifact