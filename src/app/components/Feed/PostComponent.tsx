import Image from "next/image"

export function Post({name, text, profilePic}: {name: string, text: string, profilePic: string}) {
    return (
        <div className="border-2 rounded-md p-2 w-1/2 h-fit mx-auto my-2">
            <div>
                <Image src={profilePic} alt="Profile picture" width={50} height={50} />
            </div>
            <div className="text-xl text-white">
                {name}
            </div>
            <div className="text-xl text-white">
                {text}
            </div>
        </div>
    )
}