import { Space } from "nobox-client";
import { createRowSchema } from "../Config";

interface Account {
        id:string;
        fullName: string;
        email: string;
        password: string;
        password2:string;
        profilePhoto:string;
}

export const AccountStructure: Space<Account> = {
    space: "Account",
    description: "A Record Space for Account",
    structure: {
        id: {
            description: "Account Id",
            type: String,
            required: true,
            unique:true,
        },
        profilePhoto: {
            description: "Profile Photo",
            type: String,
            required: true,
            unique:true,
        },
        email: {
            description: "Account Email",
            type: String,
            required: true,
            unique:true,
        },
        password: {
            description: "Account Password",
            required: true,
            type: String,
            hashed: true
        },
        password2: {
            description: "Account confirmed Password",
            required: true,
            type: String,
            hashed: true
        },
        fullName: {
            description: "Account Full Name",
            required: true,
            type: String,
        },
    }
}

export const AccountModel = createRowSchema<Account>(AccountStructure);