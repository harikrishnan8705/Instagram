import React from 'react'
import { useParams , Link, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

function ViewStory() {

  const {id, total} = useParams();
  
  const [story, setStory] = useState(null);

  const navigate = useNavigate();
  
  useEffect(()=> {
     fetch(`http://localhost:3000/story/${id}`)
     .then(data => data.json())
     .then(data => setStory(data))
     .catch(err => console.log("error"))
  },[id, total] 
  )

  if(id > total || id < 1)
  {
    navigate('/')
  }
 
  return (
    
    <div className=' d-flex justify-content-center align-items-center' style={{backgroundColor:"black", minHeight:"100vh"}}>
      {story ? 
        <div>
          
          <Link to={`http://localhost:5173/story/${Number(id)-1}/${total}`}><i className="bi bi-arrow-left-circle-fill"></i></Link>
          <img className="story-image" src={story.image} alt="image" />
          <Link to={`http://localhost:5173/story/${Number(id)+1}/${total}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
          <button className='btn btn-primary  m-2' onClick={()=> navigate('/')}>Home</button>
        </div>
         
      :<div>
        <p>no story</p>
        </div>
        
      }
    </div>
    
  )
}

export default ViewStory 