import AdminNavbar from './components/AdminNavbar'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from "../../redux/slice/navSlice.js"
import CreateProject from './components/CreateProject.jsx'
import AllProject from './components/AllProject.jsx'
import CreateSkill from './components/CreateSkill.jsx'
import AllSkill from './components/AllSkill.jsx'
function AdminDashboard() {
    const dispatch = useDispatch();
    const toggleNav = useSelector((state) => state.nav.toggleNav)
    const page = useSelector((state) => state.page.page);
    console.log("page", toggleNav);
  return (
    // flex lg:flex-col h-screen
    <div className='h-[100%] w-[100%]'>
      <AdminNavbar/>
        <GiHamburgerMenu
        className={`lg:hidden  fixed cursor-pointer z-10 text-gray-300 size-6 top-5 right-5 ${toggleNav? "hidden z-0" : "block "}`}
        onClick={() => dispatch(toggle())}
        /> 
        <div className={`lg:h-[90vh] flex ${page === "AllProject" ? " items-start" : " items-center  justify-center"}   `}>
            {
                (
                    ()=> {
                        switch (page) {
                            case "CreateProject" : 
                            return <CreateProject/>
                            case "AllProject" : 
                            return <AllProject/>
                            case "CreateSkill" :
                            return <CreateSkill/> 
                            case "AllSkill" :
                            return <AllSkill/>
                            default :
                            return <CreateProject/> 
                        }
                    }
                )()
            } 
        </div>
        
    </div>
  )
}

export default AdminDashboard