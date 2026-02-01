import React from 'react'
import {useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Reels() {

    const [reels, setReels] = useState([])

    const navigate = useNavigate();

    useEffect(() =>{
        axios.get('/data/db.json')
        .then((data) =>setReels(data.data.reels))
        .catch(err => console.log(err))
    })
  return (
    <div className="d-flex justify-content-center" style={{backgroundColor:"black", minHeight:"100vh"}}>
        {reels.length > 0 ?(
            <div>
                {reels.map((reel) =>(
                    <div key={reel.id}>
                       <iframe
                        width="500"
                        height="750"
                        src={reel.video_url}
                        title="YouTube reel"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                        <button className="btn btn-primary position-fixed my-5" onClick={()=> navigate('/')}>Home</button>
                    </div>
                ))}
            </div>
        ):(
            <div>loding...</div>
        )}
    </div>
  )
}

export default Reels