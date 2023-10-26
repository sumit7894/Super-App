import React, { useEffect, useState } from 'react'

const List = ({genre}) => {
    const [movies,setMovies] = useState();
    console.log(movies);
    useEffect(()=>{
        const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26",
              "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
            },
          };
        const fetchMovies = async () => {
            await fetch(
              `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`,
              options
            )
              .then((response) => response.json())
              .then((response) => setMovies(response.results.splice(4, 4)))
              .catch((err) => console.error(err));
          };
          fetchMovies();
    },[])
  return (
    <div>
      <span style={{color:"#878787",fontFamily:"Roboto",fontSize:"1.5rem",marginLeft:"1%vw"}}>{genre}</span>
      <div style={{display:"flex",overflowX:"hidden"}}>
     { movies ? ( movies.map((list,idx)=>
        <div key={idx} style={{width:"20vw",margin:"2vw",height:"18vh"}}>
          <img src={list?.primaryImage?.url} style={{height:"18vh",width:"20vw",borderRadius:"10px"}} alt='poster'/>
        </div>
        )) : <><span style={{color:"white",fontFamily:"Roboto"}}>IF YOU DON'T SEE THE MOVIE POSTER THAT'S NOT MY FAULT. SERVER IS NOT RESPONDINg </span> </>}
      </div>
    </div>
  )
}

export default List