import { useEffect, useState } from "react";
import { PostModel } from "../../nobox/record-structures/post";
import { ReturnObject } from "nobox-client";
import Post from "../../components/Post";


interface PostProps{
  id:string;
  postText:string;
  delete:string;
  createdAt:string;
  updatedAt:string;
  savedPost:string;
  fullName:string;
  profilePhoto:string;
}

const SavedPostsPage = () => {
  
  const [posts, setPosts] = useState<ReturnObject<PostProps>[]>([]);
  // const [isLoading,setIsLoading] = useState(false)

  

  

  const getAllPosts = async () => {
    const posts = await PostModel.find({savedPost:"true"}, {
      sort: {
        order: 'desc',
        by: 'createdAt'
      }
    })
    
    return posts;
  }


  const getAndSetAllPosts = async () => {
    const allPosts = await getAllPosts()
    setPosts(allPosts);
    console.log('allPosts',allPosts)
  }

  useEffect(()=>{
    getAndSetAllPosts()
  },[posts])
  return (
    <section className="mx-2 overflow-auto" >

      
      {posts?.map((post,index:number)=>(
        
      <Post key={index} post={post} />
        ))}
      </section>
  )
}

export default SavedPostsPage