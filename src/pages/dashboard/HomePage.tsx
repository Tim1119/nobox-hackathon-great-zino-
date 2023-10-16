import { useEffect, useState } from "react"
import Post from "../../components/Post"
import Share from "../../components/Share"
import { PostModel } from "../../nobox/record-structures/post"
import { ReturnObject } from "nobox-client";
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
interface Props {
  fullName:string;
  accountId:string;
  profilePhoto:string;
}
const HomePage = ({fullName,accountId,profilePhoto}:Props) => {

  const [posts, setPosts] = useState<ReturnObject<PostProps>[]>([]);
  // const [isLoading,setIsLoading] = useState(false)

  

  

  const getAllPosts = async () => {
    const posts = await PostModel.find({delete:"false"}, {
      sort: {
        order: 'desc',
        by: 'createdAt'
      }
    })
    
    return posts;
  }
  // const //getAllPosts = async () => {
  //   const posts = await PostModel.find({delete:false}, {
  //     sort: {
  //       order: 'desc',
  //       by: 'createdAt'
  //     }
  //   })
    
  //   return posts;
  // }

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

      <Share profilePhoto={profilePhoto} fullName={fullName} accountId={accountId} />
      {posts?.map((post,index:number)=>(
        
      <Post  key={index} post={post} />
        ))}
      </section>
      
   
  )
}

export default HomePage