import {useState, useEffect, useContext} from 'react'
import Loader from 'react-loader-spinner'
import {IoClose, IoSearchSharp} from 'react-icons/io5'
import Cookies from 'js-cookie'
import VideoList from '../VideoList'
import Context from '../../context/Context'
import './index.css'
import {
  HomeContainer,
  VideoRow,
  BackgroundImage,
  LogoImage,
  PremiumDescription,
  GetItNowButton,
  PremiumDetails,
  CloseButton,
  InputSearch,
  VideoInput,
  SearchButton,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  FailureButton,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const HomeRoute = () => {
  const [currentApiStatus, setApiStatus] = useState(apiStatus.initial)
  const [searchInput, setSearchInput] = useState('')
  const [displaybackground, setBackground] = useState(true)
  const [videoList, setVideoList] = useState([])
  const {isDark} = useContext(Context)

  const onRender = async () => {
    setApiStatus(apiStatus.loading)
    const jwtToken = Cookies.get('jwt_token')
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(homeVideosApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const videoData = data.videos.map(eachData => ({
        id: eachData.id,
        title: eachData.title,
        thumbnailUrl: eachData.thumbnail_url,
        name: eachData.channel.name,
        profileImageUrl: eachData.channel.profile_image_url,
        viewCount: eachData.view_count,
        publishedAt: eachData.published_at,
      }))
      setApiStatus(apiStatus.success)
      setVideoList(videoData)
    } else {
      setApiStatus(apiStatus.failure)
    }
  }

  const onDisplayPremium = () => {
    setBackground(prevState => !prevState)
  }

  const onLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  const onRetry = () => {
    onRender()
  }
  const onSuccess = () => (
    <div>
      {videoList.length !== 0 ? (
        <VideoRow>
          {videoList.map(eachVideo => (
            <VideoList
              key={eachVideo.id}
              videoList={eachVideo}
              isDark={isDark}
            />
          ))}
        </VideoRow>
      ) : (
        <FailureContainer>
          <FailureImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <FailureHeading isDark={isDark}>
            No Search results found
          </FailureHeading>
          <FailurePara>
            Try different key words or remove search filter
          </FailurePara>
          <FailureButton type="button" onClick={onRetry}>
            Retry
          </FailureButton>
        </FailureContainer>
      )}
    </div>
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

  const onSearchInput = event => {
    setSearchInput(event.target.value)
  }

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
    onRender(searchInput)
    /* eslint-disable */
  }, [searchInput])

  return (
    <HomeContainer background={isDark ? ' #ebebeb' : ' #000000'}>
      <BackgroundImage displayScreen={displaybackground} data-testid="banner">
        <PremiumDetails>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <PremiumDescription>Buy Nxt Watch Premium</PremiumDescription>
          <GetItNowButton>GET IT NOW</GetItNowButton>
        </PremiumDetails>
        <CloseButton
          onClick={onDisplayPremium}
          type="button"
          data-testid="close"
        >
          <IoClose />
        </CloseButton>
      </BackgroundImage>
      <InputSearch>
        <VideoInput
          placeholder="Search"
          value={searchInput}
          onChange={onSearchInput}
        />
        <SearchButton>
          <IoSearchSharp fill="#94a3b8" />
        </SearchButton>
      </InputSearch>
      {onRenderStatus()}
    </HomeContainer>
  )
}

export default HomeRoute
