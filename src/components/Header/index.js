import {withRouter, Link} from 'react-router-dom'
import {useContext} from 'react'
import Cookies from 'js-cookie'
import {IoSunnyOutline} from 'react-icons/io5'
import {IoMdMoon} from 'react-icons/io'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Context from '../../context/Context'
import {
  NavContainer,
  Image,
  Options,
  LogoutButton,
  DayorNight,
  LogoutContainer,
  LogoutPara,
  LogoutRow,
  Button,
} from './styledComponents'
import './index.css'

const Header = props => {
  const {isDark, setDarkorLight} = useContext(Context)

  const onSet = () => {
    setDarkorLight(prevState => !prevState)
  }

  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  const onNav = () => (
    <NavContainer background={isDark}>
      {isDark ? (
        <Link to="/" style={{textDecoration: 'none'}}>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="light"
            width={150}
          />
        </Link>
      ) : (
        <Link to="/" style={{textDecoration: 'none'}}>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
            alt="dark"
            width={150}
          />
        </Link>
      )}
      {isDark ? (
        <Options>
          <DayorNight onClick={onSet}>
            <IoMdMoon size={30} />
          </DayorNight>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
            width={32}
          />
          <Popup
            modal
            trigger={
              <LogoutButton type="button" isDark={isDark}>
                Logout
              </LogoutButton>
            }
          >
            {close => (
              <LogoutContainer background="#000000">
                <LogoutPara isDark=" #ffffff">
                  Are you sure,you want to logout?
                </LogoutPara>
                <LogoutRow>
                  <Button
                    backgroundcolor="transparent"
                    color="#ffffff"
                    onClick={() => close()}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={onLogout}
                    backgroundcolor="#3b82f6"
                    color="#ffffff"
                  >
                    Confirm
                  </Button>
                </LogoutRow>
              </LogoutContainer>
            )}
          </Popup>
        </Options>
      ) : (
        <Options>
          <DayorNight onClick={onSet} type="button">
            <IoSunnyOutline size={30} color="#ffffff" />
          </DayorNight>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
            width={32}
          />
          <Popup
            modal
            trigger={
              <LogoutButton type="button" isDark={isDark}>
                Logout
              </LogoutButton>
            }
          >
            {close => (
              <LogoutContainer background="#000000">
                <LogoutPara isDark=" #ffffff">
                  Are you sure,you want to logout?
                </LogoutPara>
                <LogoutRow>
                  <Button
                    backgroundcolor="transparent"
                    color="#ffffff"
                    onClick={() => close()}
                  >
                    Cancel
                  </Button>
                  <Button
                    backgroundcolor="#3b82f6"
                    color="#ffffff"
                    onClick={onLogout}
                  >
                    Confirm
                  </Button>
                </LogoutRow>
              </LogoutContainer>
            )}
          </Popup>
        </Options>
      )}
    </NavContainer>
  )

  return <div className="container">{onNav()}</div>
}

export default withRouter(Header)
