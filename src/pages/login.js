import { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import FirebaseContext from '../context/firebase'

const Login = () => {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const isInvalid = email === '' || password === ''

  const handleLogin = () => {

  }

  useEffect(() => {
    document.title = 'Login • Instagram'
  }, [])




  return (
    <div className='container flex mx-auto max-w-screen-md items-center h-screen'>
      This is the login page
    </div>
  )
}

export default Login
