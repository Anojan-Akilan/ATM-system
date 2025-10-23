import { useNavigate } from "react-router-dom"
import "./HomePage.css"

const HomePage = () => {

    const navigate= useNavigate();
    const handleDeposit=()=>{
        navigate("/deposit")
    }

    const handleWidthraw=()=>{
        navigate("/widthraw")
    }

    const handleTransaction=()=>{
        navigate("/transaction")
    }

    const handleLogout=()=>{
        navigate("/")
    }

  return (
    
    <div className="container01">

     
        <br />
        <div className="box01">
        <div className="class">
          <h1>WelCome Menu!</h1>
        </div>
        
        <br /><br />
        <button className="deposit" onClick={handleDeposit}>Deposit</button><br />
        <button className="widthdraw" onClick={handleWidthraw}>Widthdraw</button><br />
         <button className="transaction" onClick={handleTransaction}>Transaction</button><br />
         <button className="logout" onClick={handleLogout}>Logout</button>
      </div>
     
      
    </div>
  )
}

export default HomePage
