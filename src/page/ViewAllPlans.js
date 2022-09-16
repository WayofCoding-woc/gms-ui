import React, { useEffect, useState } from 'react'

function ViewAllPlans() {

  /*

    name:"",
    validity:"",
    price:"",
    discount:"",
    final_price:""

  */

  const[plans, setPlans] = useState({
    data : []
  });

  //the below method gets fired on page load. 
  useEffect(()=>{
    //fetch all the existing plans from backend and update the state variables.

    let mockedData = [];
    mockedData.push({
      name:"MONTHLY",
      validity:"30",
      price:"1500",
      discount:"0",
      final_price:"1500"
    },
    {
      name:"QUARTERLY",
      validity:"90",
      price:"4500",
      discount:"500",
      final_price:"4000"
    }
    )

    setPlans({data: mockedData});

     // console.log(JSON.stringify(plans))
    //alert(plans.data[0].name);
  }, []);


  return (
    <div className='container'>
      <h3>View All Plans</h3>
      <div>
        <table className='table table-striped table-info'>
          <thead>
            <tr>
                <th>Name</th>
                <th>Validity</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Final Price</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>{/* {plans.data.name} */}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewAllPlans