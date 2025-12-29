import React from 'react'
import {useState, useEffect} from 'react'
import { useParams , useNavigate} from 'react-router-dom'

function Story() {

  const [stories, setStories] = useState([])
  const navigate= useNavigate();

  let tot=0;

  

useEffect(()=>{
  fetch('http://localhost:3000/story')
  .then(data =>data.json())
  .then(data =>setStories(data))
  .catch(err =>console.log("error"))
}, [])

  return (
    
    <div>
    <div className="d-flex m-4  ">
      <div className='d-none'> 
          {tot=stories.length}
      </div>
      
      {stories.length > 0 ? (
        
           stories.map((story)=>(
            <div key={story.id} className="mx-2" onClick={()=>{ navigate(`/story/${story.id}/${tot}`)}}>
              <div className="story-border  ">
                  <img className=" story-dp rounded-circle m-6 " src={story.avatar_url} alt="image" />
                  
              </div>
              <div>
                 <p className='text-truncate' style={{width:"50px"}}>{story.username}</p>
              </div>
              
            </div>
            
            
        ))
        
       
      ):(
        <p>story not available</p>
      )}
    </div>
    </div>
    
  )
}

export default Story