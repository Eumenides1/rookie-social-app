import Image from "next/image"
import Link from "next/link"

const UserMediaCard = ({userId}:{userId:string}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">Show 出自己</span>
                <Link href="/" className="text-blue-500 text-xs">
                    See All
                </Link>
            </div>
            <div className="flex gap-4 justify-between flex-wrap">
                <div className="relative w-1/5 h-24">
                    <Image 
                        src="https://images.pexels.com/photos/19020136/pexels-photo-19020136.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt=""
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image 
                        src="https://images.pexels.com/photos/26839103/pexels-photo-26839103.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt=""
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image 
                        src="https://images.pexels.com/photos/18133948/pexels-photo-18133948.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt=""
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image 
                        src="https://images.pexels.com/photos/10515653/pexels-photo-10515653.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt=""
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default UserMediaCard