import React from 'react'

export default function Navbar() {
  return (
    <div style={{display:'flex',backgroundColor:"black",color:"white",height:"100%",width:"100%",margin:"0px",padding:"0px"}}>
        <h1>Navbar</h1>
        <ul style={{display:"flex",gap:"20px",listStyle:"none",margin:"27px",width:"100%",padding:"0",fontSize:"18px",justifyContent:"end"}}>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
        </ul>
</div>
)
}
