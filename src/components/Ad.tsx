import Image from "next/image"

const Ad = ({size}:{size: "sm"|"md"|"lg"}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm">
            {/* TOP */}
            <div className="flex items-center justify-between text-gray-500 font-medium">
                <span>精选广告位</span>
                <Image src="/more.png" alt="" width={16} height={16}/>
            </div>
            {/* BOTTOM */}
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36": "h-48"}`}>
                    <Image 
                        src="https://images.pexels.com/photos/19036833/pexels-photo-19036833.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt=""
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <Image 
                        src="https://images.pexels.com/photos/19036833/pexels-photo-19036833.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt=""
                        width={24}
                        height={24}
                        className="rounded-lg w-6 h-6 object-cover"
                    />
                    <span className="text-blue-500 font-medium">好山好水好地方</span>
                </div>
                <p className={size === "sm" ? "text-xs" : "text-sm"}>
                    {size === "sm" ? "西风烈，长空雁叫霜晨月。霜晨月，马蹄声碎，喇叭声咽。":"西风烈，长空雁叫霜晨月。霜晨月，马蹄声碎，喇叭声咽。雄关漫道真如铁，而今迈步从头越。从头越，苍山如海，残阳如血"}
                </p>
                <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn More</button>
            </div>
        </div>
    )
}

export default Ad