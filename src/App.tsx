import React from 'react';

function App() {
  return (
  <div className="bg-slate-900 w-screen h-screen fixed">
  <div className="min-h-screen bg-gradient-to-tr from-brown-900 via-brown-700 to-orange-800 relative">
    <div className="absolute inset-0 bg-white opacity-10 rounded-full blur-2xl w-2/3 h-1/3 top-16 left-1/3"></div>
    <div className="absolute inset-0 bg-orange-200 opacity-20 rounded-full blur-3xl w-1/2 h-1/4 bottom-20 right-1/4"></div>
    <div className="relative text-white flex items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-amber-200">ブログサンプルです......</h1>
    </div>
</div>



  </div>
  );
}

export default App;
