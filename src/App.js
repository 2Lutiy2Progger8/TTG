import './App.css';
import {useEffect} from "react";
// window.Telegram.WebApp.
const tg = window.Telegram.WebApp
function App() {
    useEffect(()=>{
        tg.ready()
    }, [])


    const onClose = () =>{
        tg.close()
    }



  return (
    <div className="App">
      <button onClick={() => onClose()}>Close</button>
    </div>
  );
}

export default App;
