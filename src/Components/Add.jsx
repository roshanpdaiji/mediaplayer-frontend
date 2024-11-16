import React, { useState } from 'react';
import { FloatingLabel, Button, Modal, Form } from 'react-bootstrap';
import { uploadVideoAPI } from '../services/allAPI';


function Add({setUploadVideoResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


// https://www.youtube.com/embed/Y4p0wry0N5Q?si=bupLnDkcMdfm3G35


  const[uploadVideo,setUploadVideo]=useState({
    id:"",caption:"",url:"",link:""
  })


  console.log(uploadVideo)




// const getYoutubeLink=(e)=>{
//   const {value} = e.target

//   if(value.includes("v=")){
//     let VID = value.split("v=")[1].slice(0,11)
//     console.log(`https://www.youtube.com/embed/${VID}`)
//     setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})
//   }else{
//     setUploadVideo({...uploadVideo,link:""})
//   }
// }

const getYoutubeLink = (e) => {
  const { value } = e.target

  if (value.includes("v=")) {
    let VID = value.split("v=")[1].slice(0, 11); // Extracts video ID
    console.log(`https://www.youtube.com/embed/${VID}`);
    setUploadVideo({ ...uploadVideo, link: `https://www.youtube.com/embed/${VID}` });
  } else {
    setUploadVideo({ ...uploadVideo, link: "" });
  }
};




const handleAdd=async()=>{
  const{id,caption,url,link}=uploadVideo

  if(!id || !caption|| !url|| !link){
    alert("Please fill the missing fields")
  }else{
    //api call - Upload video to json server
    const result = await uploadVideoAPI(uploadVideo)
    console.log(result);
    if(result.status>=200 && result.status<=300){
      alert("Video Uploded")
      handleClose()
      setUploadVideoResponse(result.data)
    }else{
      alert(result.message)
    }
  }
}






  return (
    <div>
      <h2>Upload Videos 
        <Button variant="outline" onClick={handleShow} style={{ marginLeft: '10px', border: 'none' }}>
          <i className="fa-solid fa-arrow-up-from-bracket fa-beat-fade" style={{ color: '#f7f7f8', fontSize: '1.5rem' }}></i>
        </Button>
      </h2>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            {/* Video ID */}
            <FloatingLabel
              controlId="floatingVideoId"
              label="Video ID"
              className="mb-3"
            >
              <Form.Control 
                type="text" 
                placeholder="Enter Video ID" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})}
              />
            </FloatingLabel>

            {/* Video Title */}
            <FloatingLabel
              controlId="floatingVideoTitle"
              label="Video Title"
              className="mb-3"
            >
              <Form.Control 
                type="text" 
                placeholder="Enter Video Title"  onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})}
              />
            </FloatingLabel>

            {/* Image URL */}
            <FloatingLabel
              controlId="floatingImageUrl"
              label="Image URL"
              className="mb-3"
            >
              <Form.Control 
                type="text" 
                placeholder="Enter Image URL" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})} 
              />
            </FloatingLabel>

            {/* Video URL */}
            <FloatingLabel
              controlId="floatingVideoUrl"
              label="Video URL"
              className="mb-3"
            >
              <Form.Control 
                type="text" 
                placeholder="Enter Video URL"  onChange={getYoutubeLink}
              />
            </FloatingLabel>

          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Upload Video
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Add;


