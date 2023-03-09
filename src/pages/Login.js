import { useState } from "react";//membuat state 
import { useNavigate } from "react-router-dom"; //meredirect halaman setelah login lalu ke dashboard
import axios from 'axios';//mengakses API
import './login.css';
// import styled from 'styled-components';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  
//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     console.log(`Username: ${username}, Password: ${password}`); 
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await axios.post('http://localhost:8000/auth',{username,password});
        console.log(response.data);
        //jika berhasil login, simpan data login ke localStronge
        localStorage.setItem('logged',response.data.logged);
        localStorage.setItem('admin',response.data.data);
        localStorage.setItem('token',response.data.token);
        //dilanjutkan navigasi ke halaman dashboard
        history('/');
    }catch(error){
        console.log(error);    }
  }

//   const login = styled.div`
//   background-color: red;
//   color: white;
// `;

// const Title = styled.h1`
//   font-size: 24px;
// `;

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   }

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   }

//   const handleLogin = () => {
    // check username and password against database or API
    // if successful, redirect user to dashboard page
    // if unsuccessful, display error message
  

  return (
    <>
      <div className="Login">
        <h1 style={{color:'white', }}>
            Login Page
        </h1>
          <form onSubmit={handleSubmit}>
              <div>
                  <label className="text-white text-xl" htmlFor="username">Username</label>
                  <input type="text" id="username" name="username" value={username}
                      onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div>
                  <label htm
                  lFor="password">Password</label>
                  <input type="password" id="password" name="password" value={password}
                      onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button type="submit">Login</button>
          </form>
      </div>
      </>
  );
  }

export default Login;


