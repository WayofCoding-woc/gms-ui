import React, { useState } from 'react'

function ResetPassword() {

  const[username, setUsername] = useState("");
  const[currentPassword, setCurrentPassword] = useState("");
  const[newPassword, setNewPassword] = useState("");

  const submit = (e)=>{
    e.preventDefault();

    let payload = {
      "username" : username,
      "currentPassword" : currentPassword,
      "newPassword" : newPassword
    }

    console.log("payload = " + JSON.stringify(payload));
    //Note that we need to invoke rest api with the above payload to reset password at backend server.

     fetch(process.env.REACT_APP_API_BASE_URL+'/api/resetPassword',
      {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
          'Content-Type': 'application/json'
          }
      })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        if(json.error != null){
          alert('Could not process your request, errorMessage : ' + json.error);
        }else{
          alert('Password reset done successfully!');
        }
    });
    
  }


  return (
    <div className='container'>
      <h3>Reset Password</h3>
      <div>
      <form onSubmit={submit}>
            <table className="table table-striped">
              <tbody>
                  <tr>
                      <th>Username</th>
                      <td><input id="username" type="text" onChange={(e)=>setUsername(e.target.value)} required /></td>
                  </tr>
                  <tr>
                      <th>Current Password</th>
                      <td><input id="currentPassword" type="password" onChange={(e)=>setCurrentPassword(e.target.value)} required /></td>
                  </tr>
                  <tr>
                      <th>New Password</th>
                      <td><input id="newPassword" type="password" onChange={(e)=>setNewPassword(e.target.value)} required /></td>
                  </tr>
                  <tr>
                      <td align="center" colSpan="2"><input type="submit" value="Submit" className="btn btn-primary" /></td>
                  </tr>
                </tbody>
            </table>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword