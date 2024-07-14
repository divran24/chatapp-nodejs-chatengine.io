import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import AuthPage from './AuthPage';
import ChatsPage from './ChatsPage';

function App() {
  const [user, setUser] = useState(undefined);
  const [count, setCount] = useState(0);

  return (
    <div>
      {!user ? (
        <AuthPage onAuth={(user) => setUser(user)} />
      ) : (
        <ChatsPage user={user} />
      )}
     
    </div>
  );
}

export default App;
