import React from 'react';

interface ContentProps {
    zIndex: number;
}

export default function Content({props}: {props: ContentProps}) {
    return (
        <div className={`min-h-screen z-${props.zIndex}`}>
            <div className="relative text-white flex items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold text-amber-200">ブログサンプルです......</h1>
            </div>
        </div>
    )
}
