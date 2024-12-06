interface ContentProps {
    zIndex: number;
}

export default function Content({props}: {props: ContentProps}) {
    const handleVibrate = () => {
        if (navigator.vibrate) {
          navigator.vibrate(200);
        }
      };
    return (
    <div className={`min-h-screen min-w-full z-${props.zIndex} grid grid-cols-1 gap-4 md:grid-cols-4 2xl:grid-cols-6 p-4 w-1/4 mx-auto`}>
    <div className="border-opacity-5 border-solid border-stone-100 h-48 flex items-center justify-center p-10 bg-white rounded-md" onTouchStart={handleVibrate} >
        <h1 className="font-bold rounded-sm">Golang text/templateについて</h1>
    </div>
    </div>
    )
}

            // <div className="relative text-white flex items-center justify-center min-h-screen">
            //     <h1 className="text-4xl font-bold text-amber-200">ブログサンプルです......</h1>
            // </div>
