import {useContext} from 'react'
import {Link} from 'react-router-dom'
import Context from '../../context/Context'
import {
  SavedList,
  ThumbNail,
  Title,
  Para,
  ViewsAndReview,
} from './styledComponents'

const SavedVideos = props => {
  const {isDark} = useContext(Context)
  const {savedVideos} = props
  const {id, thumbnailUrl, title, channelName} = savedVideos
  const {publishedAt, viewCount} = savedVideos
  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
      <SavedList>
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
      </SavedList>
    </Link>
  )
}

export default SavedVideos
