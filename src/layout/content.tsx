interface ContentProps {
    zIndex: number;
}

export default function Content({props}: {props: ContentProps}) {
    return (
        <div className={`h-screen min-w-full z-${props.zIndex} mx-auto flex flex-col p-10 justify-center items-center`}>
        <div className="w-full h-1/3 my-5 flex justify-between items-center gap-5 p-4" id="2024">
          <div className="w-full h-5/6 p-4 flex items-center justify-center">
            <div className="w-full md:w-2/6 h-full bg-slate-800 flex items-center justify-center rounded-md">
                <h2 className="font-bold text-yellow-300 text-center text-2xl">
                    sample ...
                </h2>
            </div>
          </div>
        </div>
      </div>
    )
}

            // <div className="relative text-white flex items-center justify-center min-h-screen">
            //     <h1 className="text-4xl font-bold text-amber-200">ブログサンプルです......</h1>
            // </div>
