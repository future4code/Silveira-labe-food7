import React, { useEffect, useState } from 'react';
import Router  from './routes/Router';
import splashScreen from './img/SplashScreen.png'
import GlobalState from './context/global/GlobalState';
import CardOrderInProgress from './components/OrderInProgressPage/CardOrderInProgress';

function App() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <GlobalState>
      {/* {loading? <img src={splashScreen}/> : <Router/>} */}
      <Router/>
      <CardOrderInProgress/>
    </GlobalState>
  );
}

export default App;
