import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Layout() {
 //const[loggedInUser, setLoggedInUser] = useState("Akshansh Kumar");
 const[loggedInUser, setLoggedInUser] = useState(null);
 const navigate = useNavigate();
 const[username, setUsername] = useState("");
 const[password, setPassword] = useState("");
 const[loginErrorMessage, setLoginErrorMessage] = useState("");

 const login = (e)=>{
  e.preventDefault();
  // invoke login rest api from backend and validate the credentials
  // if user is authenticated then update the variable loggedInUser and navigate to home page

  let payload = {
    "username" : username,
    "password" : password
  };

    fetch(process.env.REACT_APP_API_BASE_URL+'/api/login',
    {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
        'Content-Type': 'application/json'
        }
    })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    window.sessionStorage.setItem("username", data.username);
    window.sessionStorage.setItem("role", data.role);
    window.sessionStorage.setItem("customerId", data.customerId);
    if(data.authenticated===true){
      setLoggedInUser(data.username);
      setLoginErrorMessage("");
      navigate("/");
    }else{
      setLoginErrorMessage("Invalid Credentials, please try again.");
      setLoggedInUser(null);
    }
  
  });

 }

 const logout = ()=>{
    //alert('logged out');
    setLoggedInUser(null);
    window.sessionStorage.removeItem("data");
    window.sessionStorage.removeItem("role");
    window.sessionStorage.removeItem("customerId");
    navigate("/");
 }

 if(loggedInUser == null){
  // show the login form
  return (
    <div className='container login_form'>
      <h3>GYM Portal - Login Page</h3>
      <div className="login_error_msg">{loginErrorMessage}</div>
      <form onSubmit={login}>
        <table className="table table-bordered table-info">
          <tbody>
              <tr>
                  <th>Username:</th>
                  <td><input id="username" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required /> </td>
              </tr>
              <tr>
                  <th>Password:</th>
                  <td><input id="pwd" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required /> </td>
              </tr>
              <tr>
                  <td align="center" colSpan="2">
                      <input type="submit" value="SignIn" className='btn btn-primary' />
                  </td>
              </tr>
            </tbody>
        </table>
    </form>
    </div>
  )
 }else{
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="viewAllPlans" >View All Plans</Link></li>

          {
            (window.sessionStorage.getItem("role")==="CUSTOMER")?
              <li><Link to="viewSubscribedPlans" >View Subscribed Plans</Link></li>
              : ""
          }

          {
            (window.sessionStorage.getItem("role")==="CUSTOMER")?
              <li><Link to="viewProfile" >View Profile</Link></li>
              : ""
          }

          {
            (window.sessionStorage.getItem("role")==="ADMIN")?
              <li><Link to="createCustomer" >Create Customer</Link></li>
              : ""
          }

          {
            (window.sessionStorage.getItem("role")==="ADMIN")?
              <li><Link to="subscribePlan" >Subscribe Plan</Link></li>
              : ""
          }

          <li><Link to="resetPassword" >Reset Password</Link></li>
          <li><div className='loggedInUserPanel'>{loggedInUser} !</div></li>
          <li><div><Link to="" onClick={logout}>Logout</Link></div></li>
        </ul>
      </nav>

      <div className="footer">
        &copy; All rights reserve.
      </div>

      <Outlet />
    </div>
  )
 }

  
}

export default Layout