import { Space } from "nobox-client";
import { createRowSchema } from "../Config";

interface Chat {
        fullName: string;
        chatText:string;
}

export const ChatStructure: Space<Chat> = {
    space: "Chat",
    description: "A Record Space for Chat",
    structure: {
        fullName: {
            description: "Full Name",
            required: true,
            type: String,
        },
        chatText: {
            description: "Chat Text",
            required: true,
            type: String,
        },
    }
}

export const ChatModel = createRowSchema<Chat>(ChatStructure);