import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
// window.Telegram.WebApp.
const tg = window.Telegram.WebApp
function App() {

    const {onToggleButton, onClose} = useTelegram()

    useEffect(()=>{
        tg.ready()
    }, [])




  return (
    <div className="App">
      <button onClick={() => onToggleButton()}>xyi</button>
    </div>
  );
}

export default App;
