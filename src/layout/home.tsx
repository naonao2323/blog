import React from 'react';

interface HomeProps {
    zIndex: number;
  }

export default function Home({ children, props }: { children: React.ReactNode, props: HomeProps }) {
    return (
      <div className={`min-h-screen bg-gradient-to-tr from-brown-900 via-brown-700 to-orange-800 relative z-${props.zIndex} fixed inset-0`}>
        <div className="hidden md:block absolute inset-0 bg-white opacity-10 rounded-full blur-2xl sm:w-1/2 md:w-2/3 lg:w-2/3 sm:h-1/6 md:h-1/4 lg:h-1/6 top-16 left-1/3"></div>
        <div className="hidden md:block absolute inset-0 bg-orange-200 opacity-20 rounded-full blur-3xl sm:w-1/3 md:w-1/2 lg:w-1/2 sm:h-1/6 md:h-1/4 lg:h-1/4 bottom-20 right-1/4"></div>
        {children}
      </div>
    );
  }
