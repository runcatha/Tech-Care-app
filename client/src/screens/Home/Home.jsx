import { Layout } from '../../components'
import { Redirect, Link } from 'react-router-dom'
import './Home.css'

const Home = (props) => {


  return (

    <Layout user={props.user}>
      <div className='home'>
        <body>
          <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/mibookpro_0.jpeg?ikxsywW.QZ5qY0zj7GdEv9Yo7M1oOtpo&size=770:433'
            alt='home-img'
            id='home-img' />
          <div className='home-pg-content'>
            <div className='home-title-logos'>
              <h1>Tech Care</h1>
              <div className='home-logos-desc'>
                <div className='home-vs'>
                  <img src='https://pbs.twimg.com/profile_images/1410632439370641409/Pt-7RucE.jpg'
                    id='vs-code'
                    alt='vs-code' />
                  <p>Compatible with Visual Studio</p>
                </div>
                <div className='home-ram'>
                  <img src='data:image/png;base64,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'
                    id='ram'
                    alt='ram' />
                  <p>8 GB of RAM or more</p>
                </div>
                <div className='home-cpu'>
                  <img src="http://cdn.onlinewebfonts.com/svg/img_223797.png"
                    id='cpu'
                    src='cpu' />
                  <p>Intel's i5, i7, or M1 Chip</p>
                </div>
              </div>
            </div>
            <div className='home-mission-statment-link'>
              <div className='home-mission-statement'>
                <p>Choosing your laptop can feel overwhelming with so many options. At Tech Care we’ve selected the best laptops out there for you to compare and choose from.  Happy coding!</p>
              </div>
              <div className='home-browse-selection-link'>
                <Link to='/laptops' >
                  <h3>browse our selection</h3>
                </Link>
              </div>
            </div>
          </div>
        </body>
      </div>
    </Layout>
  )
}


export default Home