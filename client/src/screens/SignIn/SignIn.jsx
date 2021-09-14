import { useState } from 'react'
import './SignIn.css'
import { signIn } from '../../services/users'
import { useHistory } from 'react-router-dom'
import { Layout } from '../../components'
import { NavLink, Link } from 'react-router-dom'

const SignIn = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const onSignIn = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signIn(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        email: '',
        username: '',
        password: '',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button id='signin-submit-button' type='submit' className='sign-in-button'>Sign In</button>
    }
  }

  const { email, username, password } = form

  return (
    <Layout user={props.user}>
      <div className='signin-content-container'>
        <h2 className='h2-log-in'>Log In</h2>
        <form className='signin-form' onSubmit={onSignIn}>
          <div className='signin-user'>
            <img src='https://i.imgur.com/iKGsf9v.png'
              alt='email'
              id='signin-email-logo' />
            <input
              required
              id='signin-email-id'
              type='text'
              name='email'
              value={email}
              placeholder='Email'
              onChange={handleChange}
              className='signin-input'
            />
          </div>
          <div className='signin-user'>
            <img src='https://i.imgur.com/WbAsAQV.png'
              alt='username'
              id='signin-username-logo' />
            <input
              required
              id='signin-username-id'
              type='text'
              name='username'
              value={username}
              placeholder='Username'
              onChange={handleChange}
              className='signin-input'
            />
          </div>
          <div>
            <img src='https://i.imgur.com/IFrULuW.png'
              alt='password'
              id='signin-password-logo' />
            <input
              required
              id='signin-password-id'
              name='password'
              value={password}
              type='password'
              placeholder='Password'
              onChange={handleChange}
              className='signin-input'
            />
          {/* </div> */}
        </form>
        <div className='signin-button-redirect-link'>
          <Link to='/sign-up' id='signin-to-signup-link' >
            <p className='signin-to-signup'>Not a user? Sign up here!</p>
          </Link>
          <div className='signin-button-container'>
            {renderError()}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SignIn