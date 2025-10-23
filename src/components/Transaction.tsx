import "./Transaction.css"
import { useNavigate } from "react-router-dom";

const Transaction = () => {

  const navigate= useNavigate();
  const handleNavigate=()=>{
    navigate("/homePage")
  }

  return (
    <div className="container04">
      
        <br />
        <div className="box05">

          <div className="head">
          <h1 >Transaction </h1>
        </div>
        <br /><br />

          <table className="styled-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>sep23</td>
                <td>Deposit</td>
                <td>20 000</td>
              </tr>

              <tr>
                <td>sep25</td>
                <td>Widthrow</td>
                <td>8000</td>
              </tr>
            </tbody>
          </table>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <button className="hhButton" onClick={handleNavigate}>
            Home
          </button>
        </div>
        <br /><br />
        
        <div>
          
        </div>
            

     
    </div>
  )
}

export default Transaction
