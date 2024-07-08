import {useState} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import MainBody from './components/MainBody'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import Context from './context/Context'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => {
  const [isDark, setDarkorLight] = useState(true)
  const [savedVideos, setSavedVideos] = useState([])
  return (
    <Context.Provider
      value={{
        isDark,
        setDarkorLight,
        savedVideos,
        setSavedVideos,
      }}
    >
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={MainBody} />
        <ProtectedRoute
          exact
          path="/videos/:id"
          component={VideoItemDetailsRoute}
        />
        <ProtectedRoute
          exact
          path="/saved-videos"
          component={SavedVideosRoute}
        />
        <ProtectedRoute exact path="/trending" component={TrendingRoute} />
        <ProtectedRoute exact path="/gaming" component={GamingRoute} />
        <Route path="/bad-path" component={NotFound} />
        <Redirect to="/bad-path" />
      </Switch>
    </Context.Provider>
  )
}

export default App
