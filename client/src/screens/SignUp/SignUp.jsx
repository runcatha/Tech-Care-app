import { useState } from 'react'
import './SignUp.css'
import { signUp } from '../../services/users'
import { useHistory } from 'react-router-dom'
import { Layout } from '../../components'

const SignUp = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signUp(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
      setForm({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: 'Sign Up Details Invalid',
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
      return <button type='submit' className='sign-up-button'>Sign Up</button>
    }
  }
  const { username, email, password, passwordConfirmation } = form

  return (

    <>
      <Layout user={props.user}>
        <div className='form-container'>

          <form onSubmit={onSignUp} className='form-sign-up'>
            <h2 className='h2-sign-up'>Sign Up</h2>
            <div className="sign-up-div">

              <img src='https://i.imgur.com/WbAsAQV.png' alt='user' className='sign-up-image' />
              <input
                required
                type='text'
                name='username'
                value={username}
                placeholder='Enter username'
                onChange={handleChange}
                className='sign-up-input'
              />
            </div>

            <div className="sign-up-div">

              <img src='https://i.imgur.com/iKGsf9v.png' alt='email' className='sign-up-image' />
              <input
                required
                type='email'
                name='email'
                value={email}
                placeholder='Enter email'
                onChange={handleChange}
                className='sign-up-input'
              />
            </div>

            <div className="sign-up-div">
              <img src='https://i.imgur.com/IFrULuW.png' alt='password' className='sign-up-image' />
              <input
                required
                name='password'
                value={password}
                type='password'
                placeholder='Password'
                onChange={handleChange}
                className='sign-up-input'
              />
            </div>
            <div className="sign-up-div">

              <img src='https://i.imgur.com/IFrULuW.png' alt='password' className='sign-up-image' />
              <input
                required
                name='passwordConfirmation'
                value={passwordConfirmation}
                type='password'
                placeholder='Confirm Password'
                onChange={handleChange}
                className='sign-up-input'
              />
            </div>
            {renderError()}
          </form>
          <div className='sign-up-welcome'>
            <h1 className='h1-sign-up'>Welcome!</h1>
          </div>
        </div>
      </Layout>
    </>

  )
}

export default SignUp
