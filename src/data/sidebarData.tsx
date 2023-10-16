// import { RxDashboard } from "react-icons/rx";
import { HiOutlineLogout } from "react-icons/hi";
import { BsFillFilePostFill,BsChat } from "react-icons/bs";
import {LiaUserFriendsSolid,LiaHomeSolid} from 'react-icons/lia'
import {CgProfile} from 'react-icons/cg'

interface SideBarNavLinkArrayProps {
  name: string;
  icon: JSX.Element;
  link: string;
}

export const sidebarNavLinkData: Array<SideBarNavLinkArrayProps> = [
  {
    name: "Home",
    icon: <LiaHomeSolid className='w-5 h-5'  />,
    link: "/",
  },
  {
    name: "Friends",
    icon: <LiaUserFriendsSolid className='w-5 h-5' />,
    link: "/friends",
  },
  {
    name: "Chats",
    icon: <BsChat className='w-5 h-5' />,
    link: "/chats",
  },
  {
    name: "Saved Posts",
    icon: <BsFillFilePostFill className='w-5 h-5' />,
    link: "/saved-posts",
  },
  {
    name: "Profile",
    icon: <CgProfile className='w-5 h-5' />,
    link: "/profile",
  },
  {
    name: "Logout",
    icon: <HiOutlineLogout className='w-5 h-5' />,
    link: "/logout",
  },
];
