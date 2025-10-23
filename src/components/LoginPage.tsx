import { useState } from 'react';
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const [cardNumber, setCardNumber] = useState<number>();
    const [pinNumber, setPinNumber] = useState<number>();

    const navigate= useNavigate();

    const handleNext= async ()=>{

        try{
            const response= await fetch("http://localhost:8080/atm_server/login",{
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({
                    cardNumber,
                    pinNumber
                }),

            });
            const result = await response.json();
            console.log(result);

        if(response.ok){
        
        navigate("/homePage");
        alert(result.message);
        
        console.log("Navigate the homePage");

       } else {
      //   alert(result.message);
      //  navigate("/homePage");
     
        
        
      }

        }catch(error){
            console.error("Login error",error);
            alert("Please try again later.");
        }

    }

  return (
    <div className="container">
        
            <br />
            <div className="box">

            <h1>Start to Login!</h1><br /><br />

            <div className="div01">
                Card Number 
                <br /><br />
                <input type="number" className="input01"
                       value={cardNumber}
                       onChange={(e) => setCardNumber(Number(e.target.value))}
/>
            </div><br /><br />

            <div className="div02">
                Pin Number
                <br /><br />
                <input type="number" className="input02"
                       value={pinNumber}
                       onChange={(e)=>setPinNumber(Number(e.target.value))}/>
            </div><br /><br /><br />
            <br />
            
        <button className="btn" onClick={handleNext}>Login</button>
        
        </div>
        
        
    </div>
  )
}

export default LoginPage
