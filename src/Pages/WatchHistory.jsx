import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI'




function WatchHistory() {

  //Displaying History on Watch History

  const [history,setHistory]=useState([])
  useEffect(()=>{
    getHistory()

  },[])

  const getHistory=async()=>{
    const result = await getHistoryAPI()
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("API Failed")
      setHistory(result.message)
    }

  }

console.log(history)



//Removing History


const removeVideoHistory=async(id)=>{
  await deleteHistoryAPI(id)
  getHistory()

}




  return (
    <>
      <div className="container mt-5 mb-3 d-flex justify-content-between">
      <h2 className="custom-heading">Watch History</h2>


        <Link to={'/home'} style={{textDecoration:"none"}} className='fw-bolder fs-2 text-primary'>Back To Home  <i className="fa-solid fa-arrow-up-right-from-square" style={{ color: '#e4e7ec' }}></i>
        </Link>

      </div>


      
      <div className="container mt-5 mb-3 w-100">
      <div className="table shadow w-100 p-3 m-2">
        {/* Table Structure */}
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Video</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

         {  
         history?.length>0?history.map((video,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{video?.caption}</td>
          <td><a href={video?.link} target="_blank" rel="noopener noreferrer">Watch Video</a></td>
          <td>{video?.timeStamp}</td>
          <td>
            <button className="text-danger btn" onClick={() => removeVideoHistory(video?.id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
         )):<p 
         className='text-danger fw-bolder' 
         style={{ marginTop: '30px', fontSize: '30px', fontWeight: '900' }}
       >
         Nothing To Display
       </p>
       
      
            }
            {/* Add more rows here */}

          </tbody>
        </table>
      </div>
    </div>


    </>
  )
}

export default WatchHistory

