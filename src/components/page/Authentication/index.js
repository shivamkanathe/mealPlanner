import React, { Component, useRef, useState } from "react";
import fire, { auth } from "../../../utils/config";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";


const Login = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const[error,setError] = useState("");
  const [user, setUser] = useState({});
  const [currentuser,setCurrentUser] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async (e) => {
    e.preventDefault();
    setIsLogin(false);
    try{
      const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
      console.log("result of register",user);
      setIsLogin(true);
    }
    catch(e){
      console.log("error of register",e.message);
      setError(e.message)
    }
 
  };

  const login = async (e) => {
    e.preventDefault();
    setIsLogin(true);
    try{
      const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
      console.log("ok",user.user.email);
      setCurrentUser(user.user.email);
      
    
    }
    catch(e){
      console.log(e.message);
      setError(e.message)
    }
  };

  return (
    <div className="MainSection">
      {
        isLogin ? 
        <div className="loginSection">
        <div style={{display:"block",display:"flex",flexDirection:"column"}}>
            <input
              type="email"
              id="email"
              name="email"
              className="inputField"
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
              placeholder="Enter your email"
            />
            <input
              type="password"
              id="password"
              name="password"
              className="inputField"
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
              placeholder="Enter your password"
            />
        </div>
        <p style={{display: error ?"block" : "none",cursor:"pointer"}}>{error}</p>
    {  currentuser === "" || currentuser === null ?   <button className="loginButton" onClick={login}>
          Login
        </button> : 

     <Link to="/">
         <button className="loginButton">Login</button>
     </Link>
              
    }
        {/* <button className='loginButton'  onClick={register} >SignUp</button> */}
      </div>
      :
      <div className="loginSection">
        <div style={{display:"block",display:"flex",flexDirection:"column"}}>
            <input
              type="email"
              id="email"
              name="email"
              className="inputField"
              onChange={(e) => {
                setRegisterEmail(e.target.value);
              }}
              placeholder="Enter your email"
            />
            <input
              type="password"
              id="password"
              name="password"
              className="inputField"
              onChange={(e) => {
                setRegisterPassword(e.target.value);
              }}
              placeholder="Enter your password"
            />
        </div>
        <p style={{display: error ?"block" : "none",cursor:"pointer"}}>{error}</p>
        <button className='loginButton'  onClick={register} >SignUp</button>
      </div>
      }
      {
        isLogin ? <p style={{cursor:"pointer"}}>Don't have an account ? <span onClick={(e)=> {e.preventDefault(); setIsLogin(false)}} >SignUp</span></p> :
        <p style={{cursor:"pointer"}}>Already have an account ? <span onClick={(e)=> {e.preventDefault(); setIsLogin(true)}}>LoginIn</span></p> 
      }
    </div>
  );
};

export default Login;

// class Login extends Component{
//   constructor(props){
//     super(props);
//     this.login = this.login.bind(this);
//     this.signup = this.signup.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.state={
//       email:"",
//       password:""
//     }
//   }

//   login(e){
//     e.preventDefault();
//     // fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
//     //   console.log(u);
//     // }).catch((err)=>{
//     //   console.log(err);
//     // })
//   }

//   signup(e){
//     e.preventDefault();
//     // fire.auth().createuserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
//     //   console.log(u);
//     // }).catch((err)=>{
//     //   console.log(err);
//     // })
//   }

//   handleChange(e){
//     this.setState({
//       [e.target.name] : e.target.value
//     })
//   }

//   render(){
//     return(
//     <div className='MainSection'>
//     <div className='loginSection'>
//       <h1>Login</h1>
//       <input type="email" id='email' name='email' className='inputField' placeholder='Enter your email' onChange={this.handleChange} value={this.state.email} />
//       <input type="password" id='password' name='password' onChange={this.handleChange} value={this.state.password} className='inputField' placeholder='Enter your password' />
//       <button className='loginButton' onClick={this.login} >Login</button>
//       <button className='loginButton' onClick={this.signup} >SignUp</button>
//             </div>
//  </div>
//     );
//   }
// }

// export default Login
