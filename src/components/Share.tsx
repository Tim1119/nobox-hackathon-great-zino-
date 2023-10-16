import { ChangeEvent, FormEvent, useState } from "react";
import avatar from "../assets/avatar-1.jpg";
import { AiFillPicture, AiFillTag } from "react-icons/ai";
import { IoIosLocate } from "react-icons/io";
import { PostModel } from "../nobox/record-structures/post";
import { toast } from "react-toastify";

interface Props{
  fullName:string;
  accountId:string
  profilePhoto:string;
}

const Share = ({fullName,profilePhoto}:Props) => {

    const [isLoading,setIsLoading] = useState(false)
    

    const [formData, setFormData] = useState({
        postText:'',
        time:new Date().toLocaleDateString(),
        delete:"false",
        savedPost:"false",
        fullName:fullName,
        profilePhoto:profilePhoto,
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
        const returnedData = await PostModel.insertOne(formData); // Nobox was used here
        console.log('----->',returnedData)
        setFormData({
          postText: '',  // Set postText to an empty string
          time: new Date().toLocaleDateString(),
          delete: "false",
          savedPost:"false",
          fullName:"",
          profilePhoto: profilePhoto
          
        });
        toast.success("Post successfully created ", {
          toastId: "post_success",
        });
        setIsLoading(false)
      };
  
    
    
  return (
    <form  className="grid p-3 border shadow-md"  onSubmit={handleSubmit} >
      <div className="flex items-center gap-2 justify-center h-[60px]   py-2">
        <img className="w-10 h-10 rounded-full " src={profilePhoto ? profilePhoto : avatar} alt="" />
        <input 
        name='postText'
          className="flex-1 w-full max-w-[inherit] h-full p-2 text-sm border-b border-gray-300 outline-none "
          value={formData.postText}
          onChange={handleInputChange}
          placeholder="What's on your mind?"
        />
      </div>
      <div className="flex items-center justify-between my-2" >

      <div className="flex items-center justify-between">
        
        <aside className="flex items-center gap-2 p-2 text-sm rounded-md cursor-pointer hover:bg-gray-300">
            <label htmlFor="fileInput" className="flex items-center gap-2" >
            <AiFillPicture className="w-5 h-5 text-orange-700 cursor-pointer" />
            <span>Photo</span>
            </label>
            <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                // onChange={handleFileChange}
            />
        </aside>
        <aside className="flex items-center gap-2 p-2 text-sm rounded-md cursor-pointer hover:bg-gray-300">
          <AiFillTag className="w-5 h-5 text-blue-700" />
          <span>Tag</span>
        </aside>
        <aside className="hidden md:inline-flex items-center gap-2 p-2 text-sm rounded-md cursor-pointer hover:bg-gray-300">
          <IoIosLocate className="w-5 h-5 text-green-500" />
          <span>Location</span>
        </aside>
        {/* <aside className="flex items-center gap-2 p-2 text-sm rounded-md cursor-pointer hover:bg-gray-300">
          <CgSmile className="w-5 h-5 text-yellow-500" />
          <span>Feelings</span>
        </aside> */}
      </div>

      <div>
            <button className="px-5 py-1 font-medium text-white rounded-md bg-primary tex-sm" >{isLoading ? " Loading..." : "Share"}</button>
      </div>
      </div>
    </form>
  );
};

export default Share;
