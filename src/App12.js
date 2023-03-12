import './App.css';
import {useState} from "react"
import Navbar from "./Components/Navbar.js"
import About from "./Components/About.js"
import TextForm from "./Components/TextForm.js"
import Alert from "./Components/Alert.js"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App(props)
{
  const [mode,setMode] = useState("light");
  const [alert,setAlert]=useState(null);
  const togglemode=()=>{
  if(mode==="light")
  {
    setMode("dark")
    document.body.style.backgroundColor="#042743";
    showAlert("dark mode hase been enabled","success");
    document.title="Dark"
  }
  else
  {
    setMode("light")
    document.body.style.backgroundColor="white";
    showAlert("light mode hase been enabled","warning");
    document.title="light"
  }

  }
  const showAlert=(message,type)=>{
    setAlert({
        msg:message,
        type:type
    })
    setTimeout(()=>{
        setAlert(null);
    },2000);
  }
  return (
      <>
      <Router>
        <div>
          <Navbar title="PSG" mode={mode} togglemode={togglemode}/>
          <Alert alert={alert}/>
          <div className="container my-3">
           <Route path="/about" element={<About />} />
           <Route path='/' element={<TextForm heading="Enter the Text below To Analysis" showAlert={showAlert}/>} />
          </div>
        </div>
     </Router>
     </>
  );
}

export default App;
