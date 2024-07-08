import {useContext} from 'react'
import {Link} from 'react-router-dom'
import Context from '../../context/Context'
import {
  GamingList,
  ThumbNail,
  Title,
  Para,
  ViewsAndReview,
} from './styledComponents'

const GamingVideos = props => {
  const {isDark} = useContext(Context)
  const {gamingVideos} = props
  const {id, thumbnailUrl, title, channelName} = gamingVideos
  const {publishedAt, viewCount} = gamingVideos
  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
      <GamingList>
        <ThumbNail src={thumbnailUrl} alt={title} />
        <div>
          <Title isDark={isDark ? '#313131' : '#ffffff'}>{title}</Title>
          <Para isDark={isDark ? '#313131' : '#ffffff'}>{channelName}</Para>
          <ViewsAndReview>
            <Para isDark={isDark ? '#383838' : '#94a3b8'}>
              {viewCount} views{' '}
            </Para>
            <Para isDark={isDark ? '#383838' : '#94a3b8'}>. {publishedAt}</Para>
          </ViewsAndReview>
        </div>
      </GamingList>
    </Link>
  )
}

export default GamingVideos
