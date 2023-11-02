export default function Shimmer() {
    return (
        <>
            <div className="flex flex-wrap justify-evenly">
                {Array(25).fill("").map((e, idx) => (
                    <div key={idx}>
                        <div className="w-60 h-40 border border-blue-300 shadow rounded-md p-4 m-2 max-w-sm mx-auto">
                            <div className=" flex space-x-4 animate-pulse ">
                                <div className="rounded-full  bg-slate-500 h-10 w-10"></div>
                                <div className="flex-1 space-y-6 py-1">
                                    <div className="h-2 bg-slate-600 rounded"></div>
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="h-2 bg-slate-600 rounded col-span-2"></div>
                                            <div className="h-2 bg-slate-600 rounded col-span-1"></div>
                                        </div>
                                        <div className="h-2 bg-slate-600 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export const oneShimmer = () => {
    return (
        <>
           <div className="absolute w-[750px] h-[360px] border border-blue-300 shadow rounded-md p-4 m-2  mx-auto">
                            <div className=" flex space-x-4 animate-pulse ">
                                <div className="rounded-full  bg-slate-500 h-10 w-10"></div>
                                <div className="flex-1 space-y-6 py-1">
                                    <div className="h-2 bg-slate-600 rounded"></div>
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="h-2 bg-slate-600 rounded col-span-2"></div>
                                            <div className="h-2 bg-slate-600 rounded col-span-1"></div>
                                        </div>
                                        <div className="h-2 bg-slate-600 rounded"></div>
                                    </div>
                                </div>
                            </div>
                            </div>
        </>
    )
}