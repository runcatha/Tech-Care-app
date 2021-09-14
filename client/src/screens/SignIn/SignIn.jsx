import { useState } from 'react'
import './SignIn.css'
import { signIn } from '../../services/users'
import { useHistory } from 'react-router-dom'
import { Layout } from '../../components'

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
              id='signin-image' />
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
              id='signin-image' />
            <input
              required
              type='text'
              name='username'
              value={username}
              placeholder='Username'
              onChange={handleChange}
              className='signin-input'
            />
          </div>
          <div className='signin-user'>
            <img src='https://i.imgur.com/IFrULuW.png'
              alt='password'
              id='signin-image' />
            <input
              required
              name='password'
              value={password}
              type='password'
              placeholder='Password'
              onChange={handleChange}
              className='signin-input'
            />
          </div>
          {renderError()}
        </form>
      </div>
    </Layout>
  )
}

export default SignIn