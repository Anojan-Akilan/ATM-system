import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Transaction from "./components/Transaction"
import Deposit from "./components/Deposit"
import Widthraw from "./components/Widthraw"


function App() {
  

  return (
    
    <BrowserRouter>

     <div style={{
      backgroundImage:"url('/src/assets/bank.jpg')",
      height:"100vh",
      width:"100vw",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      opacity:1
    }}>

   
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/homePage" element={<HomePage/>}/>
      <Route path="/deposit" element={<Deposit/>}/>
      <Route path="/widthraw" element={<Widthraw/>}/>
      <Route path="/transaction" element={<Transaction/>}/>
      
    </Routes>
     </div>
    </BrowserRouter>
  
  )
}

export default App
