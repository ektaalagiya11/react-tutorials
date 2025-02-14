// import React from 'react';

// const salesData = [
//   {
//     id: 1,
//     day: "2025-02-01",
//     sales: 1000,
//     discount: 50,
//     profit: 400,
//   },
//   {
//     id: 2,
//     day: "2025-02-02",
//     sales: 2000,
//     discount: 30,
//     profit: 600,
//   },
//   {
//     id: 3,
//     day: "2025-02-03",
//     sales: 1500,
//     discount: 60,
//     profit: 900,
//   },
//   {
//     id: 4,
//     day: "2025-02-04",
//     sales: 1800,
//     discount: 25,
//     profit: 450,
//   },
//   {
//     id: 5,
//     day: "2025-02-05",
//     sales: 2200,
//     discount: 55,
//     profit: 1100,
//   },
// ];

// const SalesData = () => {
 
//   const filteredData = salesData.filter(item => item.discount >= 50);

//   return (
//     <div style={{textAlign:"center"}}>
//       <h1>Sales Data with 50% or More Discount </h1>
//       <table class = "table table-dark" border="1" cellPadding="10" cellSpacing="0"  >
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Day</th>
//             <th>Sales</th>
//             <th>Discount (%)</th>
//             <th>Profit</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((item) => (
//             <tr key={item.id} style={{ backgroundColor: '#d0f0c0' }}> 
//               <td>{item.id}</td>
//               <td>{item.day}</td>
//               <td>{item.sales}</td>
//               <td>{item.discount}%</td>
//               <td>{item.profit}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SalesData;
import React from 'react'

const ArrayDemo5 = () => {
    var sales = [
        {
            id:101,
            day:"monday",
            sales:0,
            discount:'10',
            profit:500
        },
        {
            id:102,
            day:"sunday",
            sales:0,
            discount:5,
            profit:200
        },
        {
            id:103,
            day:"saturday",
            sales:0,
            discount:7,
            profit:1000
        },
        {
            id:104,
            day:"thursday",
            sales:0,
            discount:10,
            profit:600
        },
        {
            id:105,
            day:"monday",
            sales:0,
            discount:51,
            profit:234
        }
    ]
    return (
    <div style={{textAlign:'center'}}>
        {/* <h1 style={{backgroundColor:'red'}}>ArrayDemo5</h1> */}
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>DAY</th>
                    <th>SALES</th>
                    <th>DISCOUNT</th>
                    <th>PROFIT</th>
                </tr>
            </thead>
            <tbody>
                {sales.map((sale)=>{
                    return(
                        <tr>
                            <td style={{backgroundColor:sale.discount>50?"green":"white"}}>{sale.id}</td>
                            <td>{sale.day}</td>
                            <td>{sale.sales}</td>
                            <td>{sale.discount}%</td>
                            <td>{sale.profit}</td>
                        </tr>    
                    )
                })

                }
            </tbody>
        </table>
      
    </div>
  )
}

export default ArrayDemo5
