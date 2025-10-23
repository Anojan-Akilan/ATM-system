import { useNavigate } from "react-router-dom"
import "./widthraw.css"

const Widthraw = () => {

  const navigate= useNavigate();
  const handleNavigate =()=>{
    navigate("/homepage");
  }

  return (
    <div className="container03">

      
        <br />
        <div className="box03">

            <div className="head">
          <h1 >Widthdraw</h1>
        </div>
            
            <br />
            <div className="cash">
                Amount
                <input type="number" className="inputCash"/>
            </div>
           <br />
           <div className="notes">
            Notes</div>
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
              <button className="dButon">
              Widthraw
            </button>
            </div>
            
            <br />
            <button className="hButon" onClick={handleNavigate}>
              Home
            </button>
        </div>
        <br /><br />
        
      
        
    </div>
  )
}

export default Widthraw
