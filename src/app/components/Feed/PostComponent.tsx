import Image from "next/image"

export function Post({name, text, profilePic, likedCount, retweetCount}: {name: string, text: string, profilePic: string, likedCount: number, retweetCount: number}) {
    return (
        <div className="border-2 rounded-md p-2 w-1/2 h-fit mx-auto my-2">
            <div>
                <Image src={profilePic} alt="Profile picture" width={50} height={50} />
            </div>
            <div className="text-2xl text-white">
                {name}
            </div>
            <hr />
            <div className="text-l text-white">
                {text}
            </div>
            <hr />
            <div className="flex flex-row text-gray-200 gap-2 my-2">
                <button className="border-2 rounded border-purple-400 p-2 hover:bg-purple-400 transition">{likedCount} likes</button>
                <button className="border-2 rounded border-white p-2 hover:bg-white hover:text-black transition">{retweetCount} retweets</button>
            </div>
        </div>
    )
}