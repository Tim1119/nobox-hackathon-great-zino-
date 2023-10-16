import  {  Config,  getFunctions,  getSchemaCreator  }  from  "nobox-client";

export const config: Config = {
endpoint:  "https://api.nobox.cloud",
project:  "test-hahah-project",
token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGV0YWlscyI6eyJfaWQiOiI2NTA4MWViN2MxNjk1MmMyOTU0NWZiZTYiLCJlbWFpbCI6InRpbW90aHlpbmlvbHV3YUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzYwMDczNzI4P3Y9NCIsImZpcnN0TmFtZSI6IkFqYW5pIFRpbW90aHkiLCJsYXN0TmFtZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMy0wOS0xOFQwOTo1NjowNy44NDhaIiwidXBkYXRlZEF0IjoiMjAyMy0wOS0xOFQwOTo1NjowNy44NDhaIn0sImlhdCI6MTY5NzQ2MDMxMSwiZXhwIjoxNjk3NTg5OTExfQ.t7EyX8D21H8CHwnfZJlmGl6kybHd2GubMz9-j0yNsNA",
};

export const createRowSchema = getSchemaCreator(config, { type: "rowed" });

export const createKeyGroupSchema = getSchemaCreator(config, { type: "key-group" });

export  const  Nobox  =  getFunctions(config);