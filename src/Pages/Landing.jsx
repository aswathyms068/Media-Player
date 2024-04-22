import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/musicbeat.gif'
import { Card } from 'react-bootstrap'
import settingImg from '../assets/settings.gif'
import cateImg from '../assets/cate.gif'
import historImg from '../assets/histo.gif'



function Landing() {
  return (
    <div className='landingsection container'>
      <div className="row align-items-center my-5">
        <div className="col-lg-6"><h3>Welcome to <span className='text-warning' style={{fontSize:'43px'}}> MediaPlayer</span></h3>
        <p className='mt-3' style={{textAlign:'justify'}}>Media player app will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop.User can also have the provision to manage their watch history as well. What are you waiting for, Let starts exploring our site!!!</p>
       <Link to={'/home'} className='btn btn-info mt-3'>Get Started</Link>
        </div>
        <div className="col-lg-6">
          <img className='ms-5' src={landingImg} alt="Landing page image" />
        </div>
      </div>
      {/* {features} */}
      <div className="row">
        <div className="col-lg-4">
        <Card style={{ width: '22rem', height:'400px' }}>
      <Card.Img style={{height:'250px',width:'300px'}} className='img-fluid ms-5'  variant="top" src={settingImg} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Users can upload, view and remove the video
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4">
        <Card style={{ width: '22rem', height:'400px' }}>
      <Card.Img  style={{height:'250px',width:'300px'}} className='img-fluid ms-5' variant="top" src={cateImg} />
      <Card.Body>
        <Card.Title>categorise Videos </Card.Title>
        <Card.Text>
          Users can  categories the videos by drag and drop features
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4">
        <Card style={{ width: '22rem', height:'400px' }}>
      <Card.Img  style={{height:'250px',width:'300px'}} className='img-fluid ms-5' variant="top" src={historImg} />
      <Card.Body>
        <Card.Title>Managing history</Card.Title>
        <Card.Text>
          Users can manage the watch history of all videos
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
      </div>
          {/* {footer} */}
          <div className="my-5 border rounded p-5 row">
            <div className="col-lg-5">
              <h3 className='text-warning'>Simple, Fast and Powerful</h3>
              <p style={{textAlign:'justify'}}>
                <span className='fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, atque accusantium. Facilis commodi odio 
              </p>
              <p style={{textAlign:'justify'}}>
                <span className='fs-5'>Categorise Videos</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, atque accusantium. Facilis commodi odio 
              </p>
              <p style={{textAlign:'justify'}}>
                <span className='fs-5'>Managing History</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, atque accusantium. Facilis commodi odio 
              </p>
            </div>
            <div className="col-lg"></div>
            <div className="col-lg-6">
            <iframe width="100%" height="438" src="https://www.youtube.com/embed/_dKczvzcX68" title="Memphis May Fire - Chaotic (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

          </div>
    </div>
  )
}

export default Landing