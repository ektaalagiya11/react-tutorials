import React from 'react'

const ArrayDemo4 = () => {
    var employees = [
        {
            id:101,
            name:"ram",
            age:25,
            salary:12000,
            gender:"male",
                } ,   
                {
            id:102,
            name:"Shyam",
            age:26,
            salary:16000,
            gender:"male",
               } ,   
               {
                id:103,
                name:"mita",
                age:24,
                salary:12000,
                gender:"female"
                    } ,  
                          
                                {
                                    id:104,
                                    name:"Sev",
                                    age:27,
                                    salary:13000,
                                    gender:"male"
                                        } ,      
                                        {
                                            id:105,
                                            name:"mahi",
                                            age:21,
                                            salary:16500,
                                            gender:"female"
                                                } ,   
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Array Demo 4</h1>
        <table  class = "table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>SALARY</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            return (
              <tr>
                <td>{emp.id}</td>
                <td>
                    <span style={{color:emp.name.startsWith("S")?"red":"white"}}>
                    {emp.name}
                    </span>
                    </td>
                <td> 
                    <span style={{color:emp.age==25?"green":"white"}}>
                    {emp.age}
                    </span>
                    </td>
                <td>
                    <span style={{backgroundColor:emp.salary>=15000?"red":"black"}} >
                        {emp.salary}</span></td>
                <td> <span style={{backgroundColor:emp.gender =="male"?"blue":"pink"}}>
                {emp.gender}
                </span>
                            </td>
              </tr>
            );
          })}
        </tbody>
    </table>
     
    </div>
  )
}

export default ArrayDemo4
