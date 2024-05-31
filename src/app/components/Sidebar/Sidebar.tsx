import { sidebarItems } from "./SidebarItems";
import Link from "next/link";
import Image from "next/image";

export function Sidebar() {
    return (
        <div className="flex max-w-fit h-screen">
            <div className="flex flex-col justify-center p-4 border-2 rounded-md mx-10 my-auto">
                <ul>
                    <Link href="/" className="flex justify-center">
                        <Image src="/lol.png" alt="Twitter logo" width={100} height={50} />
                    </Link>
                    {sidebarItems.map((item) => 
                        <Link href={item.href} key={item.name} className="py-2 m-2 text-xl text-white">
                            <li className="border-2 rounded-md p-2 hover:bg-fuchsia-300 transition-all">{item.name}</li>
                        </Link>
                    )}
                </ul>
            </div>
        </div>
    );
}