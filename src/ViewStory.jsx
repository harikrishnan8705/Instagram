// import React from 'react'
// import { useParams , Link, useNavigate} from 'react-router-dom'
// import {useState, useEffect} from 'react'

// function ViewStory() {

//   const {id, total} = useParams();
  
//   const [data, setData] = useState(null);

//   //const storyId = data.story.find(s => s.id === Number(id))

//   const navigate = useNavigate();
  
//   useEffect(()=> {
//      fetch(`/data/db.json/${id}`)
//      .then(data => data.json())
//      .then(json=> setData(json))
//      .catch(error => console.log("error"))
//   },[id, total] 
//   )

//   if(!data) return <p>loading...</p>

//   const storyId = data.story.find(s => s.id === Number(id))

//   if(!storyId) return <P>story not found</P>

//   if(id > total || id < 1)
//   {
//     navigate('/')
//   }
 
//   return (
    
//     <div className=' d-flex justify-content-center align-items-center' style={{backgroundColor:"black", minHeight:"100vh"}}>
      
          
//           <Link to={`/story/${Number(id)-1}/${total}`}>
//               <i className="bi bi-arrow-left-circle-fill"></i>
//           </Link>

//           <img className="story-image" src={storyId.image} alt="image" />

//           <Link to={`/story/${Number(id)+1}/${total}`}>
//               <i className="bi bi-arrow-right-circle-fill"></i>
//           </Link>
//           <button className='btn btn-primary  m-2' onClick={()=> navigate('/')}>Home</button>
        
//     </div>
    
//   )

// }
// export default ViewStory 

import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ViewStory() {
  const { id , total} = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/db.json")
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.log(err));

  
  }, []);

  useEffect(() => {
  if (Number(id) > Number(total)) {
    navigate("/");
  }
}, [id, total, navigate]);


  if (!data) return <p>Loading...</p>;

  const story = data.story.find(s => s.id === Number(id));

  if (!story) return <p>Story not found</p>;

  
  const prevId = Number(id) > 1 ? Number(id) - 1 : 1;
  const nextId = Number(id) < total ? Number(id) + 1 : total;

  const storyId = Number(id);
  const totalStories = Number(total);

  const nextStory = () => {
  if (storyId < totalStories) {
    navigate(`/viewstory/${storyId + 1}/${totalStories}`);
  } else {
    navigate("/"); // last story → go home
  }
};



  return (
    <div className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "black", minHeight: "100vh" }}>

      <Link to={`/story/${prevId}/${total}`}>
        <i className="bi bi-arrow-left-circle-fill"></i>
      </Link>

      <img className="story-image" src={story.image} alt="story" />

      <Link to={`/story/${nextId}/${total}`}>
        <i className="bi bi-arrow-right-circle-fill" onClick={nextStory}></i>
      </Link>

      <button
        className="btn btn-primary m-2"
        onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
}

export default ViewStory;
