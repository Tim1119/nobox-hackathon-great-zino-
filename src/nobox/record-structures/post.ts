import { Space } from "nobox-client";
import { createRowSchema } from "../Config";

interface Post {
    fullName:string;
    time?:string;
   postText:string;
   delete:string;
   savedPost:string;
   profilePhoto:string;
}

export const PostStructure: Space<Post> = {
    space: "Post",
    description: "A Post Users",
    structure: {
        fullName: {
            description: "Full Name",
            type: String,
            required: true,
            
        },
        time: {
            description: "Post Time",
            type: String,
            required: false,
            
        },
       
        profilePhoto: {
            description: "ProfilePhoto",
            required: true,
            type: String,
           
        },
        postText: {
            description: "Post Text",
            required: true,
            type: String,
           
        },
       
        delete: {
            description: "Delete Post",
            type:String,
            required: true,
           
        },
        savedPost: {
            description: "Saved Post",
            type:String,
            required: true,
           
        },
    
    }
}

export const PostModel = createRowSchema<Post>(PostStructure);