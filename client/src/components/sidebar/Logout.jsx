import {BiLogOut } from "react-icons/bi"
import useLogout from "../../hooks/useLogout"
import { useAuthContext } from "../../context/AuthContext"

const Logout = () => {
  const {loading,logout } = useLogout()
  const {authUser} = useAuthContext()
  return (
    <div className="mt-auto">
      
      {!loading ?( <>
     
     
      <span 
  className="text-yellow-300 px-20  tooltip-right font-serif "
  title="Logged-in User"
>
  {authUser.fullName}
</span>


     <span><BiLogOut className=" w-6 h-6 cursor-pointer text-white" onClick={logout}/> </span>
     </>): 
     (<span className="laoding loading-spinner"></span>) 
    }
     

    </div>
  )
}

export default Logout