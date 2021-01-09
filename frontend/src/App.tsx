import React from 'react';
import Cursor from './components/Cursor';
import './App.css';
import { useStore } from './store';

const App = () => {
  const [, dispatch] = useStore();

  const updatePos = (e: React.MouseEvent<HTMLDivElement>) => {
    // sockets

    dispatch({ type: 'UPDATE_POS', payload: { x: e.clientX, y: e.clientY } });
  };

  return (
    <div className="app" onMouseMove={updatePos}>
      <Cursor />
    </div>
  );
};

export default App;
