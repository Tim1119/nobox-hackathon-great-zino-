import { BiDotsVerticalRounded} from "react-icons/bi";
import { LiaThumbsUp } from 'react-icons/lia'
import avatar from '../assets/avatar-1.jpg'
// import postImg from '../assets/post-img.avif'
import React, { useState } from "react";
import { PostModel } from "../nobox/record-structures/post";
import { AiOutlineDelete } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import Loader from "./Loader";
import { toast } from "react-toastify";

interface postProps{
    id:string;
    postText:string;
    delete:string;
    createdAt:string;
    updatedAt:string;
    savedPost:string;
    fullName:string;
    profilePhoto:string;
}

interface Props{
    post:postProps
   }



const Post = ({post}:Props) => {
    const [isLoading,setIsLoading] =useState(false)
    const [isPostDropDownOpen,setIsPostDropdownOpen] =  React.useState<null|string>(null)

    const handleDeletePost = async (event:React.MouseEvent<HTMLDivElement>) =>{
        setIsLoading(true)
        event.preventDefault()
        const returnedData = await   PostModel.updateOneById(post.id,{
          delete:"true",
      
        } )

        console.log(returnedData);
        

        setIsPostDropdownOpen(null)

        toast.success("Post deleted successfully  ", {
            toastId: "post_success",
          });
        

        setIsLoading(false)
        
      }
      
    const handleSavePost = async (event:React.MouseEvent<HTMLDivElement>) =>{
     
        setIsLoading(true)
        event.preventDefault()
        if (post.savedPost === 'true'){
            
            const returnedData = await   PostModel.updateOneById(post.id,{
              savedPost:"false",
          
            } )

            console.log(returnedData);
            toast.success("Post unsaved  successfully", {
                toastId: "post_success",
              });

           
        }
        else{
           
            const returnedData = await   PostModel.updateOneById(post.id,{
                savedPost:"true",
            
              } )

              console.log(returnedData);

              toast.success("Post saved created ", {
                  toastId: "post_success",
                });
            }
            setIsPostDropdownOpen(null)
            
            setIsLoading(false)
      }
    if (isLoading){
        return <Loader />
    }

    if (!isLoading){
        
        return (
        
          <div className="px-3 py-3 my-1 border shadow-md z-1" >
              {/* post header */}
              <div className='relative flex items-center justify-between' >
                  <div className='flex items-center gap-2' >
                      <img src={post.profilePhoto ? post.profilePhoto : avatar} className="w-10 h-10 rounded-full" alt="" />
                      <div>
                          <h3 className="text-base font-medium" > {post?.savedPost} Ajani Timothy</h3>
                          {/* <p className="text-xs text-gray-500" >{new Date(post?.createdAt).toLocaleString()} </p> */}
                          <p className="text-xs text-gray-500" > {new Date(post?.createdAt).toLocaleString()} </p>
                      </div>
      
                  </div>
                   <div>
                      {/* <BiDotsVerticalRounded className='w-6 h-6' /> */}
                      <BiDotsVerticalRounded key={post.id} onClick={() => (isPostDropDownOpen === post.id ? setIsPostDropdownOpen(null) : setIsPostDropdownOpen(post.id))}   className='w-5 h-5 text-gray-300 text-md hover:cursor-pointer'  />
                    {isPostDropDownOpen === post.id ? (
                        <>
                          <div className="absolute right-2 mt-[10px] w-[150px] bg-white border-gray-200 border rounded-lg shadow-lg z-2 ">
    <ul className="divide-y" >
      <li>
        <div
            onClick={handleSavePost}
         className="flex items-center gap-2 p-2 cursor-pointer hover:bg-primary hover:text-white menu-item "  
        > <FiUserCheck className='w-5 h-5' /> Save Post
        </div>
      </li>
     
      <li className='' >
        <div
          className="flex items-center gap-2 p-2 cursor-pointer hover:bg-primary hover:text-white menu-item"
          onClick={handleDeletePost}
        >
          <AiOutlineDelete  className='w-5 h-5' /> Delete Post
        </div>
      </li>
    </ul>
  </div> </>
                    ) : ''}
                  </div> 
              </div>
              <div className="" >
                  <p className="my-3 text-sm" >{post.postText ? post.postText :""}</p>
                  {/* {image === '' ? "":(
      
                  <img src={postImg} className="w-full rounded-sm object-fit" alt="" />
                  )} */}
              </div>
              <div className="flex items-center justify-between my-2" >
                  <div className="flex items-center" >
                      <button className="bg-" >
                      <LiaThumbsUp />
      
                      </button>
                      <p className="text-sm" >You and 32 people like it </p>
                  </div>
                  <div className="text-sm" >
                      9 comments
                  </div>
                  
              </div>
          </div>
        )
    }
    
}

export default Post