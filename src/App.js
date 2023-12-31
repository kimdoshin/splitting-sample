import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, Suspense } from 'react';

const SplitMe = React.lazy(() => import('./SplitMe'));

function App() {

  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>
          Hello React
        </p>
        <Suspense fallback={<div>loading...</div>}>
          { visible && <SplitMe />}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
