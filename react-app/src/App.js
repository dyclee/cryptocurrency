import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

import HomeDisplay from './components/HomeDisplay';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      // console.log("HIT")
      let response = await fetch("http://localhost:3000/data", {
        method: 'get',
        // headers: { 'Content-Type': 'application/json' }
      });
      // console.log("RESPONSE", response);
      if (response.ok) {
        const info = await response.json();
        // console.log("INFO", info);
        setData(info.data);
        return;
      }
    })()
  }, [])

  if (!data.status) return null;

  return (
    <div className="App">
      <header className="App-header">
        <HomeDisplay data={data.data} />
        {/* {data.data.map((crypto) => {
          return (<>
            <div>
              {crypto.name}
            </div>
          </>)
        })} */}
      </header>
    </div>
  );
}

export default App;
