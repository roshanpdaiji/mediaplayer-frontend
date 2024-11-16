import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, getCategoryAPI, updateCategoryAPI } from '../services/allAPI'



function View({uploadVideoResponse,setDropVideoResponse}) {


  const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)




  //GET VIDEOS

  const[allVideos,setAllVideos]=useState([])

const getAllVideos=async()=>{
  const result = await getAllVideosAPI()
  console.log(result);
  if(result.status==200){
    setAllVideos(result.data)
  }else{
    console.log("Api Failed")
    setAllVideos([])
  }
}


console.log(allVideos);


useEffect(()=>{
  getAllVideos()
  setDeleteVideoResponse(false)
},[uploadVideoResponse,deleteVideoResponse])





//Reverse Drag and Drop

const [categories, setCategories] = useState([]);


const dragOver = (e)=>{
  e.preventDefault()
}

const videoDropped=async(e)=>{
  const{videoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
  // console.log(videoId,categoryId);
  const {data} = await getCategoryAPI()
  const selectedCategory=data.find(item=>item.id==categoryId)
  let result = selectedCategory.allVideos.filter(video=>video.id!==videoId)
  console.log(result)
  let {id,categoryName} = selectedCategory
  let newCategory = {id,categoryName,allVideos:result}
  const res = await updateCategoryAPI(categoryId,newCategory)
  setDropVideoResponse(res)

}



  return (
    <>

<h2 className='custom-heading mb-5'>All-Videos</h2>

       <Row drappable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}>
        
        {
          allVideos?.length>0?allVideos.map((video,index)=>(
          <Col key={index} sm={12} md={6} lg={4}>
        <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse} />
        </Col>
        )):

        <p 
         className='text-danger fw-bolder' 
         style={{ marginTop: '30px',marginLeft:'40px', fontSize: '30px', fontWeight: '900' }}
       >
         No Videos Available
       </p>
       
        
      }

       </Row>


    </>
  )
}

export default View

