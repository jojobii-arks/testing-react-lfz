import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';

function App() {
  return (
    <main className='bg-slate-200 min-h-screen flex justify-center items-center'>
      <h1 className='text-4xl font-black rounded-full bg-white px-16 py-8'>React + Tailwind + Webpack!</h1>
    </main>
  );
}

ReactDOM.createRoot(document.querySelector('#root'))
  .render(<App />);
