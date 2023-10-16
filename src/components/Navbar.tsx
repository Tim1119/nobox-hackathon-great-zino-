import { IoMdNotificationsOutline } from "react-icons/io";
import avatarImg from "../assets/avatar-1.jpg";
import { HiMagnifyingGlass,HiMiniChevronDown } from "react-icons/hi2";
import { BsPeople } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";


type Props = {
  fullName:string
  profilePhoto:string;
  isMobileSidebarOpen:boolean
  setIsMobileSidebarOpen: (value: boolean) => void;
};

const Navbar = ({ fullName,profilePhoto,setIsMobileSidebarOpen,isMobileSidebarOpen }:Props) => {
  return (
    <header className="h-[60px] z-[100] fixed top-0 font-poppins w-full border-b border-gray-300 shadow-sm  bg-primary  text-white z-3">
      <div className="flex items-center justify-between w-full h-full px-4 mx-auto">
        <section className="flex items-center justify-between ">
        <span className="lg:hidden cursor-pointer h-full" onClick={()=>setIsMobileSidebarOpen(!isMobileSidebarOpen)} >
            <FaBars className='w-6 text-white h-6 mx-2' />
          </span>
          <span className="text-lg font-bold tracking-wide hidden lg:inline-flex" >ZINO-SOCIAL</span>
        </section>
        <section className="hidden lg:flex items-center flex-[0.5] bg-white gap-2" >
          <HiMagnifyingGlass className="w-6 h-6 ml-2 mr-1 text-gray-400" />
          <input type="text" placeholder="Search for futarians and places" className="flex-1 px-3 py-2 text-black border-none rounded-md outline-none" />

        </section>
        <section className="flex items-center gap-4">

          <button className="relative inline-block">
            <IoMdNotificationsOutline className=" w-7 h-7" />

            <span className="absolute text-xs -top-[6px] font-medium mr-1 px-1.5 py-0.5 rounded-full text-white bg-red-500 ">
              4
            </span>
          </button>
          <button className="relative inline-block">
            <BsPeople className=" w-7 h-7" />

            <span className="absolute text-xs -top-[6px] font-medium mr-1 px-1.5 py-0.5 rounded-full text-white bg-red-500 ">
              4
            </span>
          </button>
          <div className="flex items-center gap-1 p-2 rounded-md cursor-pointer">
            <div className="relative cursor-pointer">
              <img className="w-10 h-10 rounded-full" src={profilePhoto ? profilePhoto : avatarImg} alt="" />
              <span className="font-poppins bottom-0 left-8 absolute  w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full text-white"></span>
            </div>
            <p className="hidden md:inlin-block text-base font-semibold">{fullName}</p>
            <HiMiniChevronDown className="w-5 h-5" />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Navbar;
