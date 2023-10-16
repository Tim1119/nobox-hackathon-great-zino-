import { sidebarNavLinkData } from "../data/sidebarData"
import NavItem from "./NavItem"


interface Props{
  isMobileSidebarOpen:boolean
  setIsMobileSidebarOpen: (value: boolean) => void;
}

interface SidebarItemProps{
  icon:JSX.Element,
  name:string,
  link:string
}

const Sidebar = ({isMobileSidebarOpen,setIsMobileSidebarOpen}:Props) => {

  const toggleSidebarLink = ()=>{
    setIsMobileSidebarOpen(!isMobileSidebarOpen)
  }
  return (
    <>
    <nav className="hidden z-[99] lg:inline-flex flex-col lg:w-[280px]   fixed h-full border border-gray-200 shadow-md py-5" >
        {sidebarNavLinkData.map((item:SidebarItemProps,index:number)=>(
            <NavItem toggleSidebarLink={toggleSidebarLink} key={index} icon={item.icon} link={item.link} name={item.name} />
        ))}
    </nav>

    {isMobileSidebarOpen && (
    <div className={`lg:hidden z-[99] fixed top-0 w-full h-screen bg-black/70 transition-transform ${isMobileSidebarOpen ? 'translate-x-0 ease-in duration-900' : '-translate-x-full ease-out duration-900'}`} >
      
    <nav className={`lg:hidden fixed top-[60px] w-[80%] sm:w-[40%] md:w-[36%] h-screen bg-white px-3 py-6`} >
        {sidebarNavLinkData.map((item:SidebarItemProps,index:number)=>(
                <NavItem key={index} icon={item.icon} link={item.link} name={item.name} />
            ))}
    </nav>
    </div>
    )}

    </>
  )
}

export default Sidebar