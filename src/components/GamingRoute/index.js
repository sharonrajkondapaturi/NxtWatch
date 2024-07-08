import {useContext, useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import TabSection from '../TabSection'
import Context from '../../context/Context'
import GamingVideos from '../GamingVideos'
import {
  DoubleContainer,
  MainContainer,
  VideoContainer,
  FailureContainer,
  FailurePara,
  FailureImage,
  FailureHeading,
  FailureButton,
  GameRow,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const GamingRoute = () => {
  const {isDark} = useContext(Context)
  const [gamingVideos, setGamingVideos] = useState([])
  const [currentApiStatus, setApiStatus] = useState(apiStatus.initial)

  const onRender = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(gamingVideosApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const gamingData = data.videos.map(eachData => ({
        id: eachData.id,
        title: eachData.title,
        thumbnailUrl: eachData.thumbnail_url,
        viewCount: eachData.view_count,
      }))
      setApiStatus(apiStatus.success)
      setGamingVideos(gamingData)
    } else {
      setApiStatus(apiStatus.failure)
    }
  }
  const onLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  const onSuccess = () => (
    <GameRow>
      {gamingVideos.map(eachVideo => (
        <GamingVideos key={eachVideo.id} gamingVideos={eachVideo} />
      ))}
    </GameRow>
  )

  const onFailure = () => (
    <FailureContainer>
      {isDark ? (
        <FailureImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure"
        />
      ) : (
        <FailureImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
          alt="failure"
        />
      )}
      <FailureHeading isDark={isDark}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailurePara>
        We are having some trouble to complete your request. Please try again
      </FailurePara>
      <FailureButton type="button">Retry</FailureButton>
    </FailureContainer>
  )

  const onRenderStatus = () => {
    switch (currentApiStatus) {
      case apiStatus.loading:
        return onLoading()
      case apiStatus.success:
        return onSuccess()
      case apiStatus.failure:
        return onFailure()
      default:
        return null
    }
  }

  useEffect(() => {
    onRender()
  }, [])

  return (
    <MainContainer>
      <Header />
      <DoubleContainer>
        <div>
          <TabSection />
        </div>
        <VideoContainer background={isDark ? ' #ebebeb' : ' #000000'}>
          {onRenderStatus()}
        </VideoContainer>
      </DoubleContainer>
    </MainContainer>
  )
}

export default GamingRoute
