import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {

const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
    name:"",
});
const [err, setErr] = useState(null);

const handleChange  = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value }));
}

const handleClick = async e => {
   e.preventDefault();

   try{
    await axios.post("http://localhost:8800/api/auth/register", inputs)
   }catch(err){
    setErr(err.response.data);
   }
};

console.log(err)

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Let's Meet.</h1>
                    <p>Hey there! Here you can connect to people globally, make friends, grow your circle.</p>
                    <span>Do you have account?</span>
                    <Link to = "/login">
                    <button>Login</button>

                    </Link>
                </div>
                <div className="right">
                  <h1>Register</h1>
                  <form>
                    <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                    <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
                    <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                    <input type="text" placeholder="Name" name="Name" onChange={handleChange}/>
                    {err && err}
                    <button onClick={handleClick}>Register</button>
                  </form>
                    
                </div> 
            </div>
        </div>
    );
};

export default Register;