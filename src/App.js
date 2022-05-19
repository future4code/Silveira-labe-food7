import React, { useEffect, useState } from 'react';
import Router  from './routes/Router';
import splashScreen from './img/SplashScreen.png'

function App() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div>
      {/* {loading? <img src={splashScreen}/> : <Router/>} */}
      <Router/>
    </div>
  );
}

export default App;
