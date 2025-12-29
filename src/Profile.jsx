import React from 'react'
import { useEffect, useState}   from 'react'
import axios from 'axios'

function Profile() {

   const [profiles, setProfiles] = useState(null);

   useEffect(() =>{
     axios.get('http://localhost:3000/Profile')
     .then(data => setProfiles(data.data))
     .catch(err => console.log(err))
   },[])

   function handleOnchange(e){
    
        setProfiles(previous => ({
          ...previous,
          [e.target.name]: e.target.value
         
        }))
   }

   const handleUpdate =async () =>{
    axios.put('http://localhost:3000/Profile', profiles)
    .then(console.log('updated'))
    .catch(err => console.log(err))
   }

  return (
    <div className="m-5">
         
        {profiles ? (
            <div  key={profiles.id}>
              <div>
                <img className="profile-image rounded-circle"  src={profiles.avatar_url} alt="image" />
                <h4>{profiles.username}</h4>
              </div>

              <input type="text"
                      value={profiles.username}
                       name="username"  
                       className="form-control my-4"
                       onChange={handleOnchange} />
                
               <input type="text"
                       name="profilepic"
                       value={profiles.avatar_url}
                        className="form-control"
                        onChange={handleOnchange} />

               <button className="btn btn-danger my-4 mx-2"  onClick={handleUpdate}>
                  Update
                </button>       

            </div>
        ) : (
         <p>loading</p>)}
    </div> 
  )
}

export default Profile