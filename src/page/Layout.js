import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Layout() {
 //const[loggedInUser, setLoggedInUser] = useState("Akshansh Kumar");
 const[loggedInUser, setLoggedInUser] = useState(null);
 const navigate = useNavigate();

 const login = ()=>{
  // invoke login rest api from backend and validate the credentials
  // if user is authenticated then update the variable loggedInUser and navigate to home page
  setLoggedInUser("Akshansh Kumar");
  navigate("/");
 }

 const logout = ()=>{
    //alert('logged out');
    setLoggedInUser(null);
    navigate("/");
 }

 if(loggedInUser == null){
  // show the login form
  return (
    <div className='container login_form'>
      <h3>GYM Portal - Login Page</h3>
      <form onSubmit={login}>
        <table className="table table-bordered table-info">
          <tbody>
              <tr>
                  <th>Username:</th>
                  <td><input id="username" type="text" /> </td>
              </tr>
              <tr>
                  <th>Password:</th>
                  <td><input id="pwd" type="password" /> </td>
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