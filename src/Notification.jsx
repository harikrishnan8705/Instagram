import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'

function Notification() {

   const [notification, setNotification] = useState([]);

   useEffect(() =>{
     axios.get('http://localhost:3000/story')
     .then(data => setNotification(data.data))
     .catch(err => console.log(err))
   },[])

  return (
    <div style={{backgroundColor:"black", minHeight:"100vh"}}>
        {notification.length > 0 ? (
            notification.map((notify) =>(
                <div key={notify.id}>
                    <div>
                        <h3>{notify.username}</h3>
                        <img src={notify.avatar_url} alt="" />
                    </div>
                </div>
            ))
        ) 
        : ( <p>loading</p> )}
    </div>       
  ) 
}

export default Notification