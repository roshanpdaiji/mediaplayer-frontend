import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { addHistoryAPI, deleteVideoAPI } from '../services/allAPI';

function VideoCard({ video, setDeleteVideoResponse }) {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Function to handle the video preview modal
  const handleCloseVideoModal = () => setShowVideoModal(false);
  const handleShowVideoModal = async () => {
    setShowVideoModal(true);

    // Get History
    const { caption, link } = video;
    let today = new Date();
    let timeStamp = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(today);

    let videoHistory = { caption, link, timeStamp };

    // API Call to add history
    await addHistoryAPI(videoHistory);
  };

  // Function to handle drag event
  const dragStarted = (e, id) => {
    console.log('Video drag started:', id);
    e.dataTransfer.setData('videoId', id);
  };



  // Function to handle delete video
  const handleDeleteVideo = async () => {
    try {
      await deleteVideoAPI(video?.id);
      setDeleteVideoResponse(true);
      alert('Video deleted successfully.');
    } catch (error) {
      console.error('Error deleting video:', error);
    }
    setShowDeleteModal(false);
  };

  // Function to show the delete confirmation modal
  const handleShowDeleteModal = () => setShowDeleteModal(true);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);



  return (
    <>
      {/* Video Card */}
      <Card
        style={{ width: '18rem' }}
        className='mb-4'
        draggable
        onDragStart={(e) => dragStarted(e, video?.id)}
      >
        <Card.Img
          variant="top"
          src={video.url}
          onClick={handleShowVideoModal}
          style={{ height: '300px', width: '280px', padding: '3px', margin: '10px auto' }}
        />

        <Card.Body>
          <div className="d-flex justify-content-between" style={{ position: 'relative' }}>
            {/* Card Title */}
            <Card.Title className="card-title">{video.caption}</Card.Title>

            {/* Delete Button */}
            <Button
              variant="primary"
              onClick={handleShowDeleteModal}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                position: 'absolute',
                bottom: '10px',
                right: '10px'
              }}
            >
              <i className="fa-solid fa-trash-can" style={{ color: '#f2f4f7' }}></i>
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Video Preview Modal */}
      <Modal show={showVideoModal} onHide={handleCloseVideoModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src={`${video.link}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
{/* Delete Confirmation Modal */}
<Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered size="sm">
  <div className='bg-info rounded' style={{ padding: '10px' }}>
    
    {/* Centered Exclamation Icon */}
    <div className="d-flex justify-content-center my-3">
      <div
        className='bg-black rounded-circle d-flex justify-content-center align-items-center'
        style={{ width: '50px', height: '50px', fontSize: '24px', color: 'white' }}
      >
        !
      </div>
    </div>

    <Modal.Body className="bg-info text-center">
      {/* Question Text */}
      <h5 className='mb-3' style={{ fontSize: '30px' }}>Are you sure?</h5>
      <h5 style={{ fontSize: '16px' }}>Do you want to delete this video?</h5>
    </Modal.Body>

    {/* Buttons at Bottom Center */}
    <Modal.Footer className='bg-info d-flex justify-content-center' style={{ borderTop: 'none' }}>
      <Button
        variant="secondary"
        onClick={handleCloseDeleteModal}
        style={{ backgroundColor: 'black', color: 'white', marginRight: '10px' }}
      >
        Cancel
      </Button>
      <Button
        variant="danger"
        onClick={handleDeleteVideo}
        style={{ backgroundColor: 'red', color: 'white' }}
      >
        Delete
      </Button>
    </Modal.Footer>
  </div>
</Modal>

      
    </>
  );
}

export default VideoCard;
