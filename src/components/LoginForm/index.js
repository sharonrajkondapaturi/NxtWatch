import {useState, useContext} from 'react'
import Cookies from 'js-cookie'
import Context from '../../context/Context'
import {
  LoginContainer,
  Form,
  InContainer,
  Image,
  Credentials,
  CredentialsInput,
  PasswordContainer,
  CheckInput,
  ShowPassword,
  LoginButton,
  Error,
} from './styledComponents'

const LoginForm = props => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShow] = useState(false)
  const [msg, setMsg] = useState(false)
  const {isDark} = useContext(Context)
  const [error, setError] = useState('')
  const isShown = () => {
    setShow(prevState => !prevState)
  }

  const onUsername = event => {
    setUserName(event.target.value)
  }

  const onPassword = event => {
    setPassword(event.target.value)
  }

  const onSubmitSuccess = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const onSubmitFailure = errorMsg => {
    setMsg(prevState => !prevState)
    setError(errorMsg)
    setUserName('')
    setPassword('')
  }

  const renderLogindetails = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  return (
    <LoginContainer isDark={isDark ? '#ffffff' : '#383838'}>
      <Form
        onSubmit={renderLogindetails}
        isDark={isDark ? '#ffffff' : '#000000'}
      >
        {isDark ? (
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
          />
        ) : (
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
            alt="logo"
          />
        )}

        <InContainer>
          <Credentials htmlFor="user" isDark={isDark ? '#000000' : '#ffffff'}>
            USERNAME
          </Credentials>
          <CredentialsInput
            placeholder="Username"
            id="user"
            onChange={onUsername}
            isDark={isDark ? ' #ebebeb' : ' #000000'}
            value={username}
          />
          <Credentials
            placeholder="password"
            htmlFor="password"
            isDark={isDark ? '#000000' : '#ffffff'}
          >
            PASSWORD
          </Credentials>
          <CredentialsInput
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            onChange={onPassword}
            isDark={isDark ? ' #000000' : '#ffffff'}
            value={password}
          />
          <PasswordContainer>
            <CheckInput type="checkbox" onChange={isShown} id="show" />
            <ShowPassword
              isDark={isDark ? ' #000000' : ' #ebebeb'}
              htmlFor="show"
            >
              Show Password
            </ShowPassword>
          </PasswordContainer>
          {msg ? <Error color=" #ff0000">{error}</Error> : null}
          <LoginButton type="submit">Login</LoginButton>
        </InContainer>
      </Form>
    </LoginContainer>
  )
}

export default LoginForm
