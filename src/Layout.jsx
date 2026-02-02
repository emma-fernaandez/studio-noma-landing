import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        :root {
          --color-dark: #151414;
          --color-yellow: #FFE77A;
          --color-light: #FFFBFB;
          --color-violet: #682DD6;
          --color-red: #FF4937;
        }
        
        * {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          background-color: var(--color-dark);
        }
        
        ::selection {
          background-color: var(--color-yellow);
          color: var(--color-dark);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: var(--color-dark);
        }
        
        ::-webkit-scrollbar-thumb {
          background: var(--color-yellow);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: var(--color-violet);
        }
      `}</style>
      {children}
    </div>
  );
}