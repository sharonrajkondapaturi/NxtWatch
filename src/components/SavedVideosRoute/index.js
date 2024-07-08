import {useState, useEffect, useContext} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import TabSection from '../TabSection'
import Context from '../../context/Context'
import SavedVideos from '../SavedVideos'
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
  const [currentApiStatus, setApiStatus] = useState(apiStatus.initial)
  const {isDark, savedVideos} = useContext(Context)

  const onRender = () => {
    setApiStatus(apiStatus.loading)
    setApiStatus(apiStatus.success)
  }
  const onLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  const onSuccess = () => (
    <ul>
      {savedVideos.map(eachVideo => (
        <SavedVideos key={eachVideo.id} savedVideos={eachVideo} />
      ))}
    </ul>
  )

  const onRetry = () => {
    onRender()
  }

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
      <FailureButton type="button" onClick={onRetry}>
        Retry
      </FailureButton>
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
