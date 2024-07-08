import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {
  Video,
  Image,
  DoubleContainer,
  Title,
  ProfileImage,
  Details,
  Name,
  Views,
  PublishedAt,
} from './styledComponents'

const VideoList = props => {
  const {videoList} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = videoList

  const newPublishedAt = formatDistanceToNow(new Date(publishedAt))

  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
      <Video>
        <Image src={thumbnailUrl} alt={title} />
        <DoubleContainer content="flex-start">
          <ProfileImage src={profileImageUrl} />
          <Details>
            <Title>{title}</Title>
            <Name>{name}</Name>
            <DoubleContainer content="flex-start">
              <Views>{viewCount} views</Views>
              <PublishedAt>{newPublishedAt} ago</PublishedAt>
            </DoubleContainer>
          </Details>
        </DoubleContainer>
      </Video>
    </Link>
  )
}

export default VideoList
