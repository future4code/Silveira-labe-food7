import React, { useEffect, useState } from 'react';
import Router  from './routes/Router';
import splashScreen from './img/SplashScreen.png'
import GlobalState from './context/global/GlobalState';

function App() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <GlobalState>
      {/* {loading? <img src={splashScreen}/> : <Router/>} */}
      <Router/>
    </GlobalState>
  );
}

export default App;
