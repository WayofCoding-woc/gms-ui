import React, { useState } from 'react'

function CreateCustomer() {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[mobile, setMobile] = useState("");
  const[dob, setDob] = useState("");
  const[address, setAddress] = useState("");

  const createCustomer = (e)=>{
    e.preventDefault();

    let payload = {
      "name" : name,
      "email" : email,
      "mobile" : mobile,
      "dob" : dob,
      "address" : address
    }

    console.log("payload = " + JSON.stringify(payload));
    //Note that we need to invoke rest api with the above payload to create a customer at backend server.


     fetch(process.env.REACT_APP_API_BASE_URL+'/api/customer',
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
          alert('Customer has been created successfully!');
        }
    });
    
  }


  return (
    <div className='container'>
      <h3>Create Customer</h3>
      <div>
      <form onSubmit={createCustomer}>
            <table className="table table-striped">
              <tbody>
                  <tr>
                      <th>Name</th>
                      <td><input id="name" type="text" onChange={(e)=>setName(e.target.value)} required /></td>
                  </tr>
                  <tr>
                      <th>Email</th>
                      <td><input id="email" type="email" onChange={(e)=>setEmail(e.target.value)} required /></td>
                  </tr>
                  <tr>
                      <th>Mobile</th>
                      <td><input id="mobile" type="number" minLength="10" onChange={(e)=>setMobile(e.target.value)} required /></td>
                  </tr>
                  <tr>
                      <th>DOB</th>
                      <td><input id="dob" type="date" onChange={(e)=>setDob(e.target.value)} required /></td>
                  </tr>
                  <tr>
                      <th>Address</th>
                      <td><textarea id="address" onChange={(e)=>setAddress(e.target.value)} required /></td>
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

export default CreateCustomer