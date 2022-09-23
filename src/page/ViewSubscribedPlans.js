import React, { useEffect, useState } from 'react'

function ViewSubscribedPlans() {

  const[plans, setPlans] = useState([]);
  const[loading, setLoading] = useState(false);

  //the below method gets fired on page load. 
  useEffect(()=>{
    //fetch all the existing plans from backend and update the state variables plans.
    setLoading(true);
    let customerId = window.sessionStorage.getItem("customerId");
    console.log("customerId="+customerId)
    fetch(process.env.REACT_APP_API_BASE_URL+'/api/customer/'+customerId+'/plan/all')
        .then(response => response.json())
        .then(json => {
            //console.log(json);
            setPlans(json);
            setLoading(false);
        });
    
  }, []);


  return (
    <div className='container'>
      <h3>View Subscribed Plans</h3>
      <div>
        <table className='table table-striped table-info table-bordered border-secondary'>
          <thead>
            <tr>
                <th>Plan Name</th>
                <th>Validity</th>
                <th>Activated Date</th>
                <th>Status</th>
            </tr>
          </thead>
          <tbody>

          {loading?(<tr key={0}><td colSpan={5}>Loading the data ...</td></tr>):
            plans.map((p, i)=>(
              <tr key={i}>
                <td>{p.plan}</td>
                <td>{p.validity}</td>
                <td>{p.activatedDate}</td>
                <td>{p.status}</td>
              </tr>
            ))
            
          }
            

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewSubscribedPlans