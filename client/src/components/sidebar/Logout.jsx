import {BiLogOut } from "react-icons/bi"
import useLogout from "../../hooks/useLogout"

const Logout = () => {
  const {loading,logout } = useLogout()
  return (
    <div className="mt-auto">
      {!loading ?(
     <BiLogOut className="w-6 h-6 cursor-pointer text-white" onClick={logout}/> ): 
     (<span className="laoding loading-spinner"></span>) 
    }
     

    </div>
  )
}

export default Logout