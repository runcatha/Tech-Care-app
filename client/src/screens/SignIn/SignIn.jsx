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
      return <button type='submit'>Sign In</button>
    }
  }

  const { email, username, password } = form

  return (
    <Layout user={props.user}>
      <div className='signin-content-container'>
        <h3>Sign In</h3>
        <form
          id='signin-form'
          onSubmit={onSignIn}>
          <label>Email</label>
          <input
            required
            type='text'
            name='email'
            value={email}
            placeholder='Enter Email'
            onChange={handleChange}
          />
          <label>Username</label>
          <input
            required
            type='text'
            name='username'
            value={username}
            placeholder='Enter Username'
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            required
            name='password'
            value={password}
            type='password'
            placeholder='Password'
            onChange={handleChange}
          />
          {renderError()}
        </form>
      </div>
    </Layout>
  )
}

export default SignIn