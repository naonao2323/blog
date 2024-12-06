import React from 'react';

interface HomeProps {
    zIndex: number;
  }

export default function Home({ children, props }: { children: React.ReactNode, props: HomeProps }) {
    return (
      <div className={`flex items-center justify-center min-h-screen bg-gradient-to-tr from-brown-900 via-brown-700 to-orange-800 relative z-${props.zIndex} fixed inset-0`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-700 to-indigo-800 opacity-30 blur-3xl"></div>
      <div className="absolute inset-0 bg-white opacity-10 rounded-full blur-2xl w-2/3 h-1/3 top-16 left-1/4"></div>
      <div className="absolute inset-0 bg-orange-300 opacity-10 rounded-full blur-3xl w-1/2 h-1/4 bottom-20 right-1/3"></div>
        {children}
      </div>
    );
  }
