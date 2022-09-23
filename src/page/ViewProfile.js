import React, { useEffect, useState } from 'react'

function ViewProfile() {

  const[data, setData] = useState([]);
  const[loading, setLoading] = useState(false);

  //the below method gets fired on page load. 
  useEffect(()=>{
    setLoading(true);
    const email = window.sessionStorage.getItem("username");
    fetch(process.env.REACT_APP_API_BASE_URL+'/api/customer?email='+email)
        .then(response => response.json())
        .then(json => {
            //console.log(json);
            setData(json);
            setLoading(false);
        });
    
  }, []);


  return (
    <div className='container'>
      <h3>View Profile</h3>
      <div>
        <table className='table table-striped table-info table-bordered border-secondary'>
          <tbody>
              <tr>
                <th>Customer Id : </th>
                <td>{data.id}</td>
              </tr>
              <tr>
                <th>Name : </th>
                <td>{data.name}</td>
              </tr>
              <tr>
                <th>Email : </th>
                <td>{data.email}</td>
              </tr>
              <tr>
                <th>Mobile : </th>
                <td>{data.mobile}</td>
              </tr>
              <tr>
                <th>DOB : </th>
                <td>{data.dob}</td>
              </tr>
              <tr>
                <th>Address : </th>
                <td>{data.address}</td>
              </tr>
              <tr>
                <th>Profile Created On : </th>
                <td>{data.createdDate}</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewProfile