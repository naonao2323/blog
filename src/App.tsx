import React from 'react';
import Home from './layout/home';
import Content from './layout/content';

function App() {
  return (
  <div className="bg-slate-900 w-screen h-screen fixed">
    <Home props={{ zIndex: 10 }} >
      <Content props={{ zIndex: 20}} />
    </Home>
  </div>
  );
}

export default App;
