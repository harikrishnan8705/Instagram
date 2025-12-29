import React from 'react'
import {useEffect,useState} from 'react'

function Rightside() {
  const [suggestions, setSuggestions] = useState([]);
  const [profile, setprofile] = useState(null) ;

 useEffect(() =>{
  fetch('http://localhost:3000/suggestions')
  .then((data) =>data.json())
  .then((data) =>setSuggestions(data))
  .catch((error) =>console.log("error"))

   fetch('http://localhost:3000/Profile')
  .then((data) =>data.json())
  .then((data) =>setprofile(data))
  .catch((error) =>console.log(error))
 },[])

  return ( 
    <div className="position-fixed ">
      <div className="suggestions  m-5" style={{width:"250px"}}>
          {profile ?
      <div className="d-flex  "> 
              <img className="sugg-profilepic  rounded-circle" src={profile.avatar_url} alt="" />
              <h5>{profile.username}</h5>
              <p className="text-primary ms-auto" >Switch</p>
            </div> : <p>loading</p>
}

     <div className="d-flex mt-2 ">
        <h6 >Suggested for you</h6>
        <b className="ms-auto ">See All</b>
     </div>

      {suggestions.length > 0 ? ( 
        suggestions.map((sugg)=>(
          <div key={sugg.id}>
            <div className="  d-flex my-3  ">
              <img className="sugg-profilepic rounded-circle" src={sugg.avatar_url} alt="" />
               <h5>{sugg.username}</h5>
               <p  className="ms-auto text-primary  ">follow</p> 
            </div>
            

           

            
               
          </div>
        )
      )) :
      <div>No Suggestions Available</div>}
      </div>
      
    </div> 
    
  );
}

export default Rightside