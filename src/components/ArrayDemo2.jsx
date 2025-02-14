import React from 'react'

const ArrayDemo2 = () => {
    var students = [
        {
            name:"ram",
            age:22,
            marks:78
        },

        {
            name:"shyam",
            age:23,
            marks:77
        },
        {
            name:"kunal",
            age:24,
            marks:81
        }
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:"red"}}>Array Demo 2</h1>
        {
            students.map((stu)=>{
                return <div>
                     <h1>Name = {stu.name}</h1>
                     <h2>Age = {stu.age}</h2>
                     <h3>Marks = {stu.marks}</h3>
                </div>

            })
        }
      
    </div>
  )
}

export default ArrayDemo2
