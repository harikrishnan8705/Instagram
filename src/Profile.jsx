import React from 'react'
import { useEffect, useState}   from 'react'
import axios from 'axios'

function Profile() {

   const [profiles, setProfiles] = useState(null);

   const [followers, setFollowers] = useState([])

   const [unfollow, setUnfollow] = useState(0);

   useEffect(() =>{
     axios.get('/data/db.json')
     .then(data => setProfiles(data.data.profile))
     .catch(err => console.log(err))

     axios.get('/data/db.json')
     .then(data => setFollowers(data.data.followers))
     .catch(err => console.log(err))

     

   },[unfollow])

   function handleOnchange(e){
    
        setProfiles(previous => ({
          ...previous,
          [e.target.name]: e.target.value
         
        }))
   }

   const handleUpdate =async () =>{
    axios.put('/data/db.json', profiles)
    .then(console.log('updated'))
    .catch(err => console.log(err))
   }
     const handleunfollow =async(id) =>{
       axios.delete(`/data/db.json/${id}`)
     .then(alert('unfollowed'))
     .then(setUnfollow(!unfollow))
     .catch(err => console.log(err))
     }
   

  return (
    <div className="p-5" style={{backgroundColor: "black", color:"white",minHeight: "100vh"}}>
         
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
     

     {followers.length > 0 ? (
      
       followers.map((follow) => (
          <div key={follow.id}>
              <div className="d-flex  my-2">
                <div><img className="sugg-profilepic rounded-circle" src={follow.image} alt=" no image" /></div>
               <div>{follow.username}</div> 
               <button className="btn btn-primary ms-auto" onClick={()=>handleunfollow(follow.id)}>Unfollow</button>
              </div>

          </div>
          
        ) )
     ):(
      <div>No Followers...</div>                  
     )}
     </div>

  )
}

export default Profile