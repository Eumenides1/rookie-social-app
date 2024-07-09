import Image from "next/image"
import Link from "next/link"

const UserInfoCard = ({userId}:{userId:string}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">用户信息</span>
                <Link href="/" className="text-blue-500 text-xs">
                    See All
                </Link>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col gap-4 text-gray-500">
                <div className="flex items-center gap-2">
                    <span className="text-xl text-black">Jaguarliu</span>
                    <span className="text-sm">@eumenides</span>
                </div>
                <p>
                    致力于成为宠物博主里最会写代码的，技术分享博主里养的狗最可爱的那一个
                </p>
                <div className="flex items-center gap-2">
                    <Image src="/map.png" alt="" width={16} height={16} />
                    <span>来自于：<b>陕西 · 宝鸡</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/school.png" alt="" width={16} height={16} />
                    <span>毕业于：<b>陕西 · 西安</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/work.png" alt="" width={16} height={16} />
                    <span>工作在：<b>腾讯云 · 云鼎实验室</b></span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                        <Image src="/link.png" alt="" width={16} height={16}/>
                        <Link href="https://jaguarliu.me" className="text-blue-500 font-medium">
                            Jaguar Liu
                        </Link>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Image src="/date.png" alt="" width={16} height={16}/>
                        <span>Ninth July 2024</span>
                    </div>
                </div>
                <button className="bg-blue-500 text-white text-sm rounded-md p-2">关注</button>
                <span className="text-red-400 self-end text-xs cursor-pointer">关进小黑屋</span>
            </div>
        </div>
    )
}

export default UserInfoCard