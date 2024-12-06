interface ContentProps {
    zIndex: number;
}

export default function Content({props}: {props: ContentProps}) {
    return (
    <div className={`min-h-screen min-w-full z-${props.zIndex} grid grid-cols-1 gap-4 md:grid-cols-4 p-10 w-1/4 mx-auto`}>
        <div className="border-2 border-solid border-stone-100 h-48 flex items-center justify-center p-10">1</div>
        <div className="border-2 border-solid border-stone-100 h-48 flex items-center justify-center p-10">2</div>
        <div className="border-2 border-solid border-stone-100 h-48 flex items-center justify-center p-10">3</div>
    </div>
    )
}

            // <div className="relative text-white flex items-center justify-center min-h-screen">
            //     <h1 className="text-4xl font-bold text-amber-200">ブログサンプルです......</h1>
            // </div>
