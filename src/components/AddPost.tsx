import prisma from "@/lib/client"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"

const AddPosts = () => {

    const {userId} = auth()
    const textAction = async (formData:FormData) => {
        "use server"
        if (!userId) return
        const desc = formData.get("desc") as string
        try {
            const res = await prisma.post.create({
                data: {
                    userId: userId,
                    desc: desc,
                }
            })
            console.log(res);

        } catch (error) {
            
        }
    } 

    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
            {/* AVATAR */}
            <Image 
                src="https://images.pexels.com/photos/21582198/pexels-photo-21582198.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" 
                alt="" 
                className="w-12 h-12 object-cover rounded-full" 
                width={48} 
                height={48} />
            {/* POST */}
            <div className="flex-1">
                {/* TEXT INPUT */}
                <form action={textAction} className="flex gap-4">
                    <textarea 
                        placeholder="Hi~分享今天的新鲜事～" 
                        className="flex-1 bg-slate-100 rounded-lg p-2" 
                        name="desc"
                    />
                    <Image 
                        src="/emoji.png" 
                        alt="" 
                        className="w-5 h-5  cursor-pointer self-end" 
                        width={20} 
                        height={20} />
                    <button>发送</button>
                </form>
                {/* POST OPTIONS */}
                <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src='/addimage.png' alt="" width={20} height={20}/>
                        Photo
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src='/addVideo.png' alt="" width={20} height={20}/>
                        Video
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src='/addevent.png' alt="" width={20} height={20}/>
                        Event
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src='/poll.png' alt="" width={20} height={20}/>
                        Poll
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPosts