import {useContext} from 'react'
import {Link} from 'react-router-dom'
import Context from '../../context/Context'
import {
  TrendingList,
  ThumbNail,
  Title,
  Para,
  ViewsAndReview,
} from './styledComponents'

const TrendingVideos = props => {
  const {isDark} = useContext(Context)
  const {trendingVideos} = props
  const {id, thumbnailUrl, title, channelName} = trendingVideos
  const {publishedAt, viewCount} = trendingVideos
  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
      <TrendingList>
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
      </TrendingList>
    </Link>
  )
}

export default TrendingVideos
