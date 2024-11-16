import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function LandingPage() {
  return (
    <>

{/*Head Section*/}
      <Row className="mt-5 align-items-center justify-content-between w-100">
        
         <Col></Col>
         
         <Col lg={5}>
  <h1 style={{ color: "blueviolet", fontSize: "40px" }}>
    Welcome to <span className="text-warning">Media Player</span>
  </h1>
  <p>
    Explore an immersive media experience where you can upload, stream, and enjoy videos effortlessly. 
    Access your favorite content anytime, anywhere, and elevate your entertainment journey with our user-friendly platform.
  </p>
  <Link to="/home" className="btn btn-danger" style={{ textDecoration: "none" }}>Get Started</Link>
</Col>


        <Col lg={5}>
        <img src="https://c.tenor.com/YoFLcGT38dYAAAAC/dj-mix.gif" alt="" />
        </Col>

        <Col></Col>

      </Row>

{/*Card Section */}
  <div className="container mt-3 mb-5">
  <h2 className="text-center text-warning">Features</h2>

  {/* Wrapper for Cards */}
  <div className="d-flex justify-content-center align-items-start mt-5 gap-4 flex-wrap">

    {/* Card 1 */}
    <Card style={{ width: '18rem', height: '500px' }}>
      <Card.Img
        variant="top"
        src="https://img.freepik.com/premium-photo/portrait-fictional-astronaut-neon-light-spacesuit-hightech-astronaut-from-future_158863-2270.jpg"
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Easily manage your video content with intuitive tools and quick access features.
        </Card.Text>
        <Button variant="primary">Click Here</Button>
      </Card.Body>
    </Card>

    {/* Card 2 */}
    <Card style={{ width: '18rem', height: '500px' }}>
      <Card.Img
        variant="top"
        src="https://styles.redditmedia.com/t5_88w7r1/styles/communityIcon_7kp2e6isekua1.png"
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text>
          Browse videos by categories for a more streamlined viewing experience.
        </Card.Text>
        <Button variant="primary">Click Here</Button>
      </Card.Body>
    </Card>

    {/* Card 3 */}
    <Card style={{ width: '18rem', height: '500px' }}>
      <Card.Img
        variant="top"
        src="https://pics.craiyon.com/2024-04-01/0gAHyjwTTKmfiiHnA7Zt1Q.webp"
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Keep track of your recently watched videos and easily find them again.
        </Card.Text>
        <Button variant="primary">Click Here</Button>
      </Card.Body>
    </Card>

  </div>
</div>


{/*Details Section*/}
<div className="container border d-flex align-items-center justify-content-center mt-5 p-4">

  <div className="col-lg-5">
    <h4 className='text-warning fw-bolder'>Simple, Powerful & Fast</h4>

      <h6 className='m-4'><span className='text-warning fw-bolder'>Play Everything</span> Our media player is designed to play virtually every audio and video format, including MP3, MP4, AVI, MKV, and more. You can now enjoy all of your favorite media without worrying about format compatibility. Whether it's high-definition movies, music albums, or podcasts, everything plays seamlessly.</h6>
      <h6 className='m-4'><span className='text-warning fw-bolder'>Easy Navigation</span> Navigating through your media library has never been easier. With an intuitive and user-friendly interface, you'll have no trouble finding your favorite content. The streamlined design ensures you spend less time searching and more time enjoying your media, with options for custom playlists and favorites.</h6>
      <h6 className='m-4'><span className='text-warning fw-bolder'>Optimized for All Devices</span> Whether you’re at home, at the office, or on the go, our media player is optimized for all devices. Experience smooth playback on smartphones, tablets, desktops, and laptops. The player adapts perfectly to your screen size, ensuring that your media looks great no matter what device you're using. Plus, the efficient performance guarantees that your device’s battery lasts longer.</h6>
    
    </div>

  <div className="col-lg-5 ms-2">

  <iframe width="560" height="315" src="https://www.youtube.com/embed/6JckvJdP1Yw?si=9eDlVRmkQGJqlt_w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

  </div>

</div>

    </>
  )
}

export default LandingPage



