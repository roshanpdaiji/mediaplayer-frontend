import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>

        <Navbar className="bg-body-tertiary mt-1 p-2">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
          <Navbar.Brand>
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/644/734/large_2x/media-player-icon-vector.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />{''}  Media-Player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>

    </>
  )
}

export default Header


