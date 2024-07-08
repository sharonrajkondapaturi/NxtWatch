import {useState, useEffect, useContext} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BiLike, BiDislike, BiSave} from 'react-icons/bi'
import ReactPlayer from 'react-player'
import Context from '../../context/Context'
import TabSection from '../TabSection'
import Header from '../Header'
import {
  FailureButton,
  FailureContainer,
  FailureHeading,
  FailurePara,
  FailureImage,
  MainContainer,
  VideoContainer,
  DoubleContainer,
  Title,
  DetailReview,
  ViewsAndTime,
  Para,
  ReviewButton,
  HorizantalLine,
  ProfileImage,
  YoutuberDetails,
  DetailsTop1,
  DetailsTop2,
} from './styledComponents'
import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const VideoItemDetailsRoute = props => {
  const [currentApiStatus, setApiStatus] = useState(apiStatus.initial)
  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)
  const [saved, setSaved] = useState(false)
  const [videoDetails, setVideoDetails] = useState([])
  const {isDark} = useContext(Context)
  const {setSavedVideos} = useContext(Context)
  const {match} = props
  const {params} = match
  const {id} = params

  const onRender = async () => {
    setApiStatus(apiStatus.success)
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const videoData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channelName: data.video_details.channel.name,
        channelProfileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      setVideoDetails(videoData)
      setApiStatus(apiStatus.success)
    } else {
      setApiStatus(apiStatus.failure)
    }
  }

  const onLike = () => {
    setLike(true)
    setDislike(false)
  }

  const onDislike = () => {
    setDislike(true)
    setLike(false)
  }

  const onSaved = () => {
    if (saved === true) {
      setSaved(false)
    } else {
      setSaved(true)
      setSavedVideos(prevState => [...prevState, videoDetails])
    }
  }
  const onSuccess = () => {
    const {
      title,
      videoUrl,
      channelName,
      channelProfileImageUrl,
      subscriberCount,
      publishedAt,
      viewCount,
      description,
    } = videoDetails

    return (
      <div>
        <ReactPlayer url={videoUrl} controls className="video-container" />
        <Title isDark={isDark ? '#181818' : '#f1f1f1'}>{title}</Title>
        <DetailReview>
          <ViewsAndTime>
            <Para>{viewCount} views .</Para>
            <Para>{publishedAt}</Para>
          </ViewsAndTime>
          <ViewsAndTime>
            <ReviewButton
              isDark={like ? '#3b82f6' : '#94a3b8'}
              onClick={onLike}
            >
              <BiLike size={20} style={{marginRight: 10}} />
              Like
            </ReviewButton>
            <ReviewButton
              isDark={dislike ? '#3b82f6' : '#94a3b8'}
              onClick={onDislike}
            >
              <BiDislike size={20} style={{marginRight: 10}} />
              Dislike
            </ReviewButton>
            <ReviewButton
              isDark={saved ? '#3b82f6' : '#94a3b8'}
              onClick={onSaved}
            >
              <BiSave size={20} style={{marginRight: 10}} />
              Save
            </ReviewButton>
          </ViewsAndTime>
        </DetailReview>
        <HorizantalLine size={1} />
        <ViewsAndTime style={{marginTop: 10}}>
          <ProfileImage src={channelProfileImageUrl} alt="channel logo" />
          <YoutuberDetails>
            <DetailsTop1 isDark={isDark ? '#181818' : '#f1f1f1'}>
              {channelName}
            </DetailsTop1>
            <DetailsTop2 isDark={isDark ? '#7e858e' : '#d7dfe9'}>
              {subscriberCount}
            </DetailsTop2>
            <Title
              isDark={isDark ? '#181818' : '#f1f1f1'}
              size={{fontSize: 15, marginTop: 20}}
            >
              {description}
            </Title>
          </YoutuberDetails>
        </ViewsAndTime>
      </div>
    )
  }

  const onLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
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
      case apiStatus.success:
        return onSuccess()
      case apiStatus.failure:
        return onFailure()
      case apiStatus.loading:
        return onLoading()
      default:
        return null
    }
  }

  useEffect(() => {
    onRender()
    /* eslint-disable */
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

export default VideoItemDetailsRoute
