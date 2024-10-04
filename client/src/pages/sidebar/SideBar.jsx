import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import Logout from './Logout.jsx'

const SideBar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'> 
    <SearchInput/>
    <div className='divider px-3 mb-0'></div>
    <Conversations/>
    <Logout/>
    </div>
  )
}

export default SideBar