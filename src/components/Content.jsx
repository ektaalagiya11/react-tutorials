import React from 'react'

const Content = () => {

    var name = 'amit'
    var age = 19
    var isActive = true;
   

  return (
    <div style={{backgroundColor:"GrayText",height:"500px",width:"100%",textAlign:"center"}}>
        <h1>hello</h1>
    {name}
    <h1>Name = {name}</h1>
    <h2>Age = {age}</h2>
    <h2>Active ? {isActive}</h2>
    <h2>Active = {isActive == true ? "active" : "not active"}</h2>
      
    </div>
  )
}

export default Content
