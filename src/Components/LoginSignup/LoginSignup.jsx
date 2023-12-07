import React, {useState} from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { Link } from 'react-router-dom'
const LoginSignup = () => {

  const [action,setAction] = useState("Login");

  const [Email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  const handlePass=(e)=>{
    e.preventDefault();
    setPassword(e.target.value);
  }
  const handleEmail=(e)=>{
    e.preventDefault();
    setEmail(e.target.value);
  }
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className="underline">  </div>
        </div>
      <div className="inputs">
        {action==="Login"?<div></div> : <div className="input">
        <img src={user_icon} className='Icons' alt="" />
        <input type="text" placeholder="Name" />
      </div> }
      

      <div className="input">
        <img src={email_icon} className='Icons' alt="" />
        <input type="email" value={Email} onChange={(e)=>handleEmail(e)}  placeholder="Email ID" />
      </div>

      <div className="input">
        <img src={password_icon} className='Icons' alt="" />
        <input type="password" value={password} onChange={(e)=>handlePass(e)}  placeholder="Password" />
      </div>
    </div>

    {/* {action==="Sign Up"? <div></div>:<div className="forgot-password">Lost Password? <span>Click Here</span></div>} */}


    <div className="submit-container">
      {/* <div className={action==="Login"?"submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div> */}
      <div className={action==="Sign Up"?"submit gray" : "submit"} onClick={()=>{setAction("Login")}} >{
        password==="admin123" && Email==="admin@gmail.com" ? <Link to="/home" style={{color:"white",textDecoration:"none"}}> Login</Link>:<p>Login</p>
      }
     </div>
    </div>
    </div>
  )
}

export default LoginSignup
