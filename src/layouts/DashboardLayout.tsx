import React, { ReactNode, useEffect} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InformationBar from "../components/InformationBar";
import { useNavigate } from "react-router-dom";

interface DashboardLayoutInterfaceProps {
  children: ReactNode;
  profilePhoto:string
  fullName:string
}

const DashboardLayout: React.FC<DashboardLayoutInterfaceProps> = ({
  children,profilePhoto,fullName
}) => {

  const [isMobileSidebarOpen,setIsMobileSidebarOpen] = React.useState<boolean>(false)


  const navigate = useNavigate()


  useEffect(() => {
    if (!fullName) {
      navigate('/login');
    }
  }, []);

if (fullName){

  return (
    <div className="relative h-screen font-sans ">
      <Navbar profilePhoto={profilePhoto} fullName={fullName}  setIsMobileSidebarOpen={setIsMobileSidebarOpen} isMobileSidebarOpen={isMobileSidebarOpen}  />
      <div className="top-[400px] h-full text-white  pt-[60px] bg-[#fbfbfb] flex">
        <Sidebar  setIsMobileSidebarOpen={setIsMobileSidebarOpen} isMobileSidebarOpen={isMobileSidebarOpen} />
        <div  className="lg:max-w-[calc(100%_-_680px)] w-full ml-auto overflow-y-auto text-black z-1">
          {children}
        </div>
        <InformationBar />
      </div>
    </div>
  );
}

};

export default DashboardLayout;
