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
      return <button id='signin-submit-button' type='submit'>Sign In</button>
    }
  }

  const { email, username, password } = form

  return (
    <Layout user={props.user}>
      <div className='signin-content-container'>
        <h3>Log In</h3>
        <form
          className='signin-form'
          onSubmit={onSignIn}>
          <div className='signin-email'>
            <label>
              <img src='https://i.imgur.com/iKGsf9v.png'
                alt='email'
                id='signin-email-logo' />
            </label>
            <input
              required
              id='signin-email-id'
              type='text'
              name='email'
              value={email}
              placeholder='Email'
              onChange={handleChange}
            />
          </div>
          <div className='signin-username'>
            <label>
              <img src='https://i.imgur.com/WbAsAQV.png'
                alt='username'
                id='signin-username-logo' />
            </label>
            <input
              required
              type='text'
              name='username'
              value={username}
              placeholder='Username'
              onChange={handleChange}
            />
          </div>
          <div className='signin-password'>
            <label><img src='https://i.imgur.com/IFrULuW.png'
              alt='password'
              id='signin-password-logo' />
            </label>
            <input
              required
              name='password'
              value={password}
              type='password'
              placeholder='Password'
              onChange={handleChange}
            />
          </div>
          {renderError()}
        </form>
      </div>
    </Layout>
  )
}

export default SignIn