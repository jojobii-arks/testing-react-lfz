import React from 'react';
import DrawerNavbar from './components/daisyui-drawer';

export default function App() {
  const routes = [
    {
      label: 'bababooey',
      route: '#'
    },
    {
      label: 'epic style',
      route: '#'
    }
  ];

  return (
    <DrawerNavbar routes={routes}>
      <div className='p-16 bg-base-200 min-w-full prose text-center'>
        <h1>Okay, I got DaisyUI to work...</h1>
      </div>
      <div className="flex justify-center py-16">
        <button className='btn btn-primary'>now this is epic</button>
      </div>
    </DrawerNavbar>
  );
}
