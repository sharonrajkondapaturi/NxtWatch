import {useContext, useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import TabSection from '../TabSection'
import Context from '../../context/Context'
import TrendingVideos from '../TrendingVideos'
import {
  DoubleContainer,
  MainContainer,
  VideoContainer,
  FailureContainer,
  FailurePara,
  FailureImage,
  FailureHeading,
  FailureButton,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const SavedVideosRoute = () => {
  const {isDark} = useContext(Context)
  const [trendingVideos, setTrendingVideos] = useState([])
  const [currentApiStatus, setApiStatus] = useState(apiStatus.initial)

  const onRender = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(trendingVideosApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const trendingData = data.videos.map(eachData => ({
        id: eachData.id,
        videos: eachData.id,
        title: eachData.title,
        thumbnailUrl: eachData.thumbnail_url,
        channelName: eachData.channel.name,
        profileImageUrl: eachData.channel.profile_image_url,
        viewCount: eachData.view_count,
        publishedAt: eachData.published_at,
      }))
      setApiStatus(apiStatus.success)
      setTrendingVideos(trendingData)
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
    <ul>
      {trendingVideos.map(eachVideo => (
        <TrendingVideos key={eachVideo.id} trendingVideos={eachVideo} />
      ))}
    </ul>
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

export default SavedVideosRoute
