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
    <div>
        {notification.length > 0 ? (
            notification.map((notify) =>(
                <div key={notify.id}>
                    <div>
                        <h3>{notify.username}</h3>
                        <p>{notify.avatar_url}</p>
                    </div>
                </div>
            ))
        ) 
        : ( <p>loading</p> )}
    </div>       
  ) 
}

export default Notification