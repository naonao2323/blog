interface ContentProps {
    zIndex: number;
}

export default function Content({props}: {props: ContentProps}) {
    const handleVibrate = () => {
        if ("vibrate" in navigator) {
            console.log("aaaaaaaaaaaaaa")
            navigator.vibrate(10000);
          } else {
            console.log("bbbbbbbbbbbbbbb")
            alert("Vibration API is not supported on this device.");
        }
    };
    return (
    <div className={`min-h-screen min-w-full z-${props.zIndex} grid grid-cols-1 gap-4 md:grid-cols-4 2xl:grid-cols-6 p-4 w-1/4 mx-auto`}>
        <div className={`border-opacity-5 border-solid border-stone-100 h-48 flex items-center justify-center p-10 bg-white rounded-md z-30`} onTouchStart={handleVibrate} >
            <h1 className="font-bold rounded-sm">Golang text/templateについて</h1>
        </div>
    </div>
    )
}

            // <div className="relative text-white flex items-center justify-center min-h-screen">
            //     <h1 className="text-4xl font-bold text-amber-200">ブログサンプルです......</h1>
            // </div>
