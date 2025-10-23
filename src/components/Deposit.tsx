import { useNavigate } from "react-router-dom"
import "./Deposit.css"


const Deposit = () => {

  const navigate= useNavigate();
  const handleNavigate=()=>{
    navigate("/homePage");
  }
  return (
    <div className="container02">
      
        <br />
        <div className="box02">
        <div className="head">
          <h1 >Deposit</h1>
        </div>
            
            <br />
            <div className="cash">
              Amount
                <input type="number" className="inputCash"/>
            </div>
           <br />
           <div className="notes">
            Notes  </div> 
            <br />
            <div className="five">
              ₹5 000
              <input type="number" className="inputFive"/>
            </div>
            <br />
             <div className="one">
              ₹1 000
              <input type="number" className="inputOne"/>
            </div>
            <br />

             <div className="fiveHundred">
              ₹500
              <input type="number" className="input05"/>
            </div>

            <br />
            <div className="oneHundred">
              ₹100
              <input type="number" className="input04"/>
            </div>
            <br /><br />
            <div>
              <button className="depositButon" onClick={handleNavigate}>
              Deposit
            </button>

            
            </div><br />  
            <button className="homeButon" onClick={handleNavigate}>
              Home
            </button>
            
            <br />
            
        </div>
        
        
      
      
    </div>
  )
}

export default Deposit
