import React, { useEffect, useState } from 'react'
import { FloatingLabel, Modal, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';



function Category(dropVideoResponse) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[categoryName,setCategoryName]=useState("")
  const[allCategories,setAllCategories]=useState("")

  


  //ADD CATEGORY 

  const handleAdd = async()=>{
    if(categoryName){
    const result =await addCategoryAPI({categoryName,allVideos:[]})
    if(result.status>=200 && result.status<300){
      handleClose()
      setCategoryName("")
      getCategories()
    }
  else{
    console.log(result.message);
  }
}
  else{
    alert("Please Fill missing Fields")
  }

  }


  //Displaying Category

  const getCategories=async()=>{
    const{data} = await getCategoryAPI()
      setAllCategories(data)
  }

  console.log(allCategories)

  useEffect(()=>{
    getCategories()
  },[])



  //Removing Category

  const removeCategory=async(id)=>{
    await deleteCategoryAPI(id)
    getCategories()
  }


  //Drag and Drop

  const dragOver = (e)=>{
    console.log("video drap over the category");
    e.preventDefault()
  }

// console.log(allCategories)
// console.clear;

  const videoDrop=async (e,categoryId)=>{
    const videoId = e.dataTransfer.getData("videoId")
    console.log(videoId,"dropped into category id:",categoryId);
    const {data} = await getAVideoAPI(videoId)
    console.log(data);
    const selectedCategory = allCategories.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updateCategoryAPI(categoryId,selectedCategory)
    getCategories()
  }



  useEffect(()=>{
getCategories()
  },[dropVideoResponse])


//Reverse Drag and Drop

const videoDragStarted=(e,videoId,categoryId)=>{
  let dataShare={videoId,categoryId}
  e.dataTransfer.setData("data",JSON.stringify(dataShare))
}



  return (
    <>

    <div className="d-grid" >
         <Button onClick={handleShow} className="btn btn-sm btn-primary">Add Category</Button>
   </div>



    <Modal
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
  centered
>
  <Modal.Header closeButton>
    <Modal.Title>Upload Category Details</Modal.Title>
  </Modal.Header>
  <Modal.Body>

    <Form>
      {/* Category ID */}
      <FloatingLabel
        controlId="floatingCategoryname"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control 
          type="text" 
          placeholder="Enter Category Name"  onChange={e=>setCategoryName(e.target.value)}
        />
      </FloatingLabel>

   
    </Form>
  </Modal.Body>

  <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            ADD
          </Button>
        </Modal.Footer>

</Modal>


{
  allCategories?.length > 0 ? 
  allCategories.map(category => (
      <div className="border border-2 m-3 p-3" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category?.id)} style={{ backgroundColor: 'bisque', color: 'black', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }} key={category?.id}>
        <div className="d-flex justify-content-between align-items-center">

        <h1 className="mb-3" style={{ backgroundColor: 'aliceblue', padding: '10px', margin: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)' }}>{category?.categoryName}</h1><button className="btn p-0 shake-btn mb-3" onClick={() => removeCategory(category?.id)} style={{ backgroundColor: 'black', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '10px', marginTop: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)' }}><i className="fas fa-trash" style={{ color: 'red', fontSize: '20px' }}></i></button>

        </div>

        
        <Row>
  {category?.allVideos.length > 0 ? (
    category?.allVideos.map((card) => (
      <Col sm={12} md={4} xl={3} key={card.id} droppable onDragStart={(e)=>videoDragStarted(e,card.id,category.id)}>
        <Card className="mb-2" style={{ height: '200px' }}> {/* Added 100px height to the card */}
          <Card.Img
            variant="top"
            src={card.url}
            onClick={handleShow}
            style={{
              height: '100%',       // Ensures the image takes up the full height of the card
              width: '570%',        // Adjusts the width to fill the card's width
              objectFit: 'cover',   // Ensures the image covers the space without distortion
              margin: 0,            // Removes any margin around the image
            }}
          />
         
        </Card>

        <Card.Body className="p-1" style={{ backgroundColor: 'black', width: '180%' }}>
  <Card.Title className="text-center" style={{ fontSize: '0.9rem', margin: 0, color: 'white', borderRadius: '5px', width: '100%', padding: '5px' }}>
    {card.caption}
  </Card.Title>
</Card.Body>


      </Col>
    ))
  ) : (
    <p>No videos available</p> // Display this if there are no videos in this category
  )}
</Row>

      </div>
    )): 
    <p
    className="no-category-message text-center"
  >
    No Categories Created
  </p>
  
}


    </>
  )
}

export default Category
