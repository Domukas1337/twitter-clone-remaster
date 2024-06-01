import Image from "next/image"
import { Post } from "./PostComponent"

export function Feed(){
    return (
        <div className="flex flex-col justify-center items-center w-screen border-2 my-2 mx-2">
           <Post 
           name="John Doe"
           text="Hello World"
           profilePic="/lol.png"
           />
           <Post 
           name="John Doe"
           text="lets Welcome children of the Spring, In your garbs of green and gold"
           profilePic="/lol.png"
           />
        </div>
    )
}