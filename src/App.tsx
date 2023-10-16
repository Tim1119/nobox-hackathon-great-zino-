import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {lazy,Suspense, useState} from 'react'
import Loader from './components/Loader';
import ErrorPage from './pages/ErrorPage';
import DashboardLayout from './layouts/DashboardLayout';



function App() {
  

const HomePage = lazy(() => import("./pages/dashboard/HomePage"));
const GeneralChatPage = lazy(() => import("./pages/dashboard/GeneralChatPage"));
const ProfilePage = lazy(() => import("./pages/dashboard/ProfilePage"));
const SavedPostsPage = lazy(() => import("./pages/dashboard/SavedPostsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));

const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [accountId, setAccountId] = useState("");
const [profilePhoto,setProfilePhoto] = useState("");


const router = createBrowserRouter([
  {
    path: "/",
    // errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />} >
        <DashboardLayout fullName={fullName} profilePhoto={profilePhoto} >
          <HomePage fullName={fullName}  accountId={accountId} profilePhoto={profilePhoto} />
        </DashboardLayout>
      </Suspense>
    ),
  },
  
  
  {
    path: "/chats",
    errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />}>
        <DashboardLayout fullName={fullName} profilePhoto={profilePhoto}>
          <GeneralChatPage fullName={fullName} email={email} accountId={accountId} />
        </DashboardLayout>
      </Suspense>
    ),
  },
  
  {
    path: "/saved-posts",
    errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />}>
        <DashboardLayout fullName={fullName} profilePhoto={profilePhoto}>
          <SavedPostsPage />
        </DashboardLayout>
      </Suspense>
    ),
  },
  {
    path: "/profile",
    errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />}>
        <DashboardLayout fullName={fullName} profilePhoto={profilePhoto}>
          <ProfilePage />
        </DashboardLayout>
      </Suspense>
    ),
  },
  {
    path: "/login",
    errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />}>
        
          <LoginPage setFullName={setFullName} setEmail={setEmail} setAccountId={setAccountId} setProfilePhoto={setProfilePhoto} />
       
      </Suspense>
    ),
  },
  {
    path: "/signup",
    errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />}>
       
          <SignUpPage />
       
      </Suspense>
    ),
  },
  {
    path:"/*",
    element:<ErrorPage/>
  }
]);

  return (
   
      
       <RouterProvider router={router} fallbackElement={<Loader />} />
  )
}

export default App
