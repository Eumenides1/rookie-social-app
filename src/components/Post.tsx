import Image from "next/image"
import Comments from "./Comments"

const Post = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image 
                        src="https://images.pexels.com/photos/25478628/pexels-photo-25478628.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" 
                        alt="" 
                        className="w-10 h-10 rounded-full"
                        width={40} height={40}/>
                    <span className="font-medium">Jaguarliu</span>
                </div>
                <Image 
                    src="/more.png" 
                    alt=""
                    width={16} height={16}/>
            </div>
            {/* DESC */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image 
                        src="https://images.pexels.com/photos/22638730/pexels-photo-22638730.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        fill
                        alt=""
                        className="object-cover rounded-md"
                    />
                </div>
                <p>一花凋零荒芜不了整个春天，一次挫折也荒废不了整个人生。</p>
            </div>
            {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image 
                            src="/like.png"
                            width={16}
                            height={16}
                            alt=""
                            className="cursor-pointer"
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">
                            123 <span className="hidden md:inline">Likes</span> 
                        </span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image 
                            src="/comment.png"
                            width={16}
                            height={16}
                            alt=""
                            className="cursor-pointer"
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">
                            123 <span className="hidden md:inline">Comments</span> 
                        </span>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image 
                            src="/share.png"
                            width={16}
                            height={16}
                            alt=""
                            className="cursor-pointer"
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">
                            123 <span className="hidden md:inline"> Shares</span> 
                        </span>
                    </div>
                </div>
            </div>
            {/* Comments */}
            <Comments />
        </div>
    )
}

export default Post