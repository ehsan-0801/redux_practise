import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Parent from './pages/Parent';
import ShortForm from './pages/ShortForm';
import Counter from './pages/Counter';
import LongForm from './pages/LongForm';

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);
  const value = { count, setCount };

  return (
    <COUNTER_CONTEXT.Provider value={ value }>
      <div className='Main-App'>
        {/* <Parent></Parent> */ }
        {/* <ShortForm></ShortForm>
         */}
        {/* <Counter></Counter> */ }
        <LongForm></LongForm>
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
