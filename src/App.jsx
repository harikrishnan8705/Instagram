import React from 'react'
import './App.css'
import Leftside from './Leftside.jsx'
import Center from './Center.jsx'
import Rightside from './Rightside.jsx'

function App() {
  return (
   <>
    <div className="d-flex" style={{backgroundColor:"black", height:"200%", color:"white", minHeight: "100vh"}} >

      <div className="w-20"> <Leftside /></div>
      <div className="w-50"> <Center/></div>
      <div className="w-30"> <Rightside/></div>
    </div> 

     </>    
 
    
      
  
   
  )
}

export default App