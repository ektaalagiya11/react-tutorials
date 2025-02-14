import React, {useState}from 'react'

const Movie = () => {
      const [moviename, setmoviename] = useState("")
      const [theatername, settheatername] = useState()
      const [movietickect, setmovietickect] = useState()
      const [date, setdate] = useState("")
      const [time, settime] = useState()


  return (
    <div style={{textAlign:"center"}}>
        <h1>MOVIE DETAILS</h1>
        <div>
            <label>MOVIE NAME</label>
            
        <input type="text" placeholder='enter movie name' onChange={(event)=>{setmoviename(event.target.value)}}></input>
        {moviename}
      </div>
      <div>
        <label>THEATER NAME</label>
        {/* <input type='number' placeholder='enter age' onChange={(event)=>{age(event)}}></input> */}
        <input type="text" placeholder='enter theatername' onChange={(event)=>{settheatername(event.target.value)}}></input>
        {theatername}
      </div>
      <div>
        <label>MOVIE TICKECT</label>
        <input type='number' placeholder='enter movie tickect' onChange={(event)=>{setmovietickect(event.target.value)}}></input>
        {movietickect}
      </div>
      <div>
        <label>DATE</label>
        <input type='date' placeholder='enter date' onChange={(event)=>{setdate(event.target.value)}}></input>
        {date}
      </div>
      <div>
        <label>TIME</label>
        <input type='time' placeholder='enter time' onChange={(event)=>{settime(event.target.value)}}></input>
        {time}
      </div>
      
      <button>SUBMIT</button>
        </div>
      
 
  )
}

export default Movie
