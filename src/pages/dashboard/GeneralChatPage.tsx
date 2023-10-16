import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io"
import { ChatModel } from "../../nobox/record-structures/chats";
import { toast } from "react-toastify";
import { ReturnObject } from "nobox-client";
interface Props{
  fullName:string;
  email:string;
  accountId:string;
}


interface ChatProps{
  fullName:string;
  chatText:string;
}

const GeneralChatPage = ({fullName,}:Props) => {

  const [isLoading,setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    chatText:'',
    fullName:fullName,
});

const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
    ...prevState,
    [name]: value,
    }));
}


  const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    event.preventDefault();
    const returnedData = await ChatModel.insertOne(formData); // Nobox was used here
    console.log('----->',returnedData)
    setFormData({
      chatText: '',  // Set postText to an empty string
      fullName:fullName,      
    });
    toast.success("Chat successfully created ", {
      toastId: "chat_success",
    });
    setIsLoading(false)
  };


  const [chats, setChats] = useState<ReturnObject<ChatProps>[]>([]);
  // const [isLoading,setIsLoading] = useState(false)

  

  

  const getAllChats = async () => {
    const chats = await ChatModel.find({}, {
      // sort: {
      //   order: 'desc',
      //   by: 'createdAt'
      // }
    })
    
    return chats;
  }

  const getAndSetAllChats = async () => {
    const allChats = await getAllChats()
    setChats(allChats);
    console.log('allPosts',allChats)
  }

  useEffect(()=>{
    getAndSetAllChats()
  },[chats])



  return (
    <div className="flex flex-col w-full h-full  justify-between" >
      <div className="w-full  text-white px-3 py-4 bg-primary font-bold text-xl" >
        <h3>Futarians Chat</h3>
      </div>
      <div className="flex-1 " >
        {chats.map((chat,index)=>(

        <div key={index} className="bg-gray-200 rounded-md p-2 border h-fit my-1" >
        
        <h3 className="text-sm font-medium text-black" >{chat.fullName ? chat.fullName : ""}</h3>
        <p className="text-xs font-light" >{
          chat.chatText ? chat.chatText : ""
        }</p>
       
        </div>
        ))}
        {chats.length === 0 && (<h2 className="text-xl text-black font-sans" >No Chats available</h2>)}
      </div>
      {isLoading ? 'Loading Chats ' : ''}
      <form onSubmit={handleSubmit} className="sticky bottom-0 flex items-center p-1 gap-2 border-t mb-0 border-b" >
        <input   value={formData.chatText} onChange={handleInputChange} name="chatText" className="flex-1 p-2 text-sm outline-none" placeholder="Send a Chat"></input>
        <IoMdSend className='w-5 h-5 text-green-500' onClick />
      </form>
    </div>
  )
}

export default GeneralChatPage