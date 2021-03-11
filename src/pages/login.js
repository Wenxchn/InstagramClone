import { useContext, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import FirebaseContext from '../context/firebase'
import * as ROUTES from '../constants/routes'

const Login = () => {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const isInvalid = email === '' || password === ''

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      history.push(ROUTES.DASHBOARD)
    } catch (error) {
      setEmail('')
      setPassword('')
      setError(error.message)
    }
  }

  useEffect(() => {
    document.title = 'Login • Instagram'
  }, [])

  // 2:16:52

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iphone" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white border border-gray-primary p-4 mb-4">
          <h1 className="flex justify-center w-full">
            <img className="mt-2 w-6/12 mb-4" src="/images/logo.png" alt="Instagram" />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
          <form onSubmit={handleLogin} method="POST">
            <input
              className="text-sm text-gray-base w-full border border-grey-primary mr-3 py-5 px-4 h-2 rounded mb-2"
              aria-label="Enter your email"
              type="text"
              placeholder="Email"
              onChange={({ target }) => setEmail(target.value)}
            />
            <input
              className="text-sm text-gray-base w-full border border-grey-primary mr-3 py-5 px-4 h-2 rounded mb-2"
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              disabled={isInvalid}
              className={`bg-blue-medium text-white w-full rounded font-bold h-8 
              ${isInvalid && 'opacity-50'}`}
              type="submit"
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex flex-col w-full bg-white justify-center items-center p-4 border border-gray-primary">
          <p className="text-sm">
            Don't have an account?{` `}
            <Link to="/signup" className="text-blue-medium font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
