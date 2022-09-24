import React, { useState } from 'react'

function SubscribePlan() {

  const[customerId, setCustomerId] = useState("");
  const[planId, setPlanId] = useState("");
  const[paidAmount, setPaidAmount] = useState("");
  const[paymentMode, setPaymentMode] = useState("");
  const[paymentRefNo, setPaymentRefNo] = useState("");

  const submit = (e)=>{
    e.preventDefault();

    let payload = {
      "paidAmount" : paidAmount,
      "paymentMode" : paymentMode,
      "paymentRefNo" : paymentRefNo
    }

    console.log("payload = " + JSON.stringify(payload));
     let url = process.env.REACT_APP_API_BASE_URL+'/api/customer/'+customerId+'/plan/'+planId;
     console.log("url = " + url);
     fetch(url,
      {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
          'Content-Type': 'application/json'
          }
      })
      //.then(response=>console.log("response="+JSON.stringify(response)))
    .then(response => response.json())
    .then(json => {
        console.log("json="+JSON.stringify(json))
        if(json.error != null){
          alert('Could not process your request, errorMessage : ' + json.error);
        }else{
          alert('Plan has been subscribed successfully!');
        }
    })
    .catch(error => {
      console.log("error="+error)
      return Promise.reject()
    })
    ;
    
  }


  return (
    <div className='container'>
      <h3>Subscribe Plan</h3>
      <div>
      <form onSubmit={submit}>
            <table className="table table-striped">
              <tbody>
                  <tr>
                      <th>Customer Id</th>
                      <td><input id="customerId" type="number" onChange={(e)=>setCustomerId(e.target.value)} required /></td>
                  </tr>
                  <tr>
                      <th>Plan Id</th>
                      <td><input id="planId" type="number" onChange={(e)=>setPlanId(e.target.value)} required /></td>
                  </tr>
                  <tr>
                      <th>Payment Amount</th>
                      <td><input id="paidAmount" type="text" onChange={(e)=>setPaidAmount(e.target.value)} required /></td>
                  </tr>
                  <tr>
                      <th>Payment Mode</th>
                      <td>
                        <select id="paymentMode" onChange={(e)=>setPaymentMode(e.target.value)}>
                          <option value="CASH">CASH</option>
                          <option value="UPI">UPI</option>
                          <option value="CARD_SWIPE">CARD SWIPE</option>
                        </select>
                      </td>
                  </tr>
                  <tr>
                      <th>Payment Ref No</th>
                      <td><input id="paymentRefNo" type="text" onChange={(e)=>setPaymentRefNo(e.target.value)} required /></td>
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

export default SubscribePlan