import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';

function App() {
  return (
    <div className='p-16 bg-base-300 min-w-full prose text-center'>
      <h1>DaisyUI is here...</h1>
      <h2>Bababooey</h2>
    </div>
  );
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
