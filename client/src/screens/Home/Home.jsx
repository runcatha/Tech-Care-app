import { Layout } from '../../components'
import { Redirect, Link } from 'react-router-dom'
import './Home.css'

const Home = (props) => {


  return (

    <Layout user={props.user}>
      <div className='home'>
        <body>
          <img src=''
            alt='home-img'
            id='home-img' />
          <div className='home-pg-content'>
            <div className='home-title-logos'>
              <h1>Tech Care</h1>
              <div className='home-logos-desc'>
                <div className='home-vs'>
                  <img src=''
                    id='vs-code'
                    alt='vs-code' />
                  <p></p>
                </div>
                <div className='home-cpu'>
                  <img src=""
                    id='cpu'
                    src='cpu' />
                </div>
                <div className='home-ram'>
                  <img src=''
                    id='ram'
                    alt='ram' />
                </div>
              </div>
            </div>
            <div className='home-mission-statment-link'>
              <div className='home-mission-statement'>
                <p>fdasdfas</p>
              </div>
              <div className='home-browse-selection-link'>
                <Link to='/laptops' >
                  <h3>browse our selection</h3>
                </Link>
              </div>
            </div>
          </div>
        </body>
        <h1>This is our home page</h1>
      </div>
    </Layout>
  )
}


export default Home