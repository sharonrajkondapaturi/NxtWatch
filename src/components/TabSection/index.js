import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {FaFire} from 'react-icons/fa'
import {IoHomeSharp} from 'react-icons/io5'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  Tabs,
  TabButton,
  Social,
  SocialMedia,
  SocialImage,
  SocialPara,
} from './styledComponents'
import Context from '../../context/Context'
import './index.css'

const TabSection = () => {
  const [tabs, setTab] = useState('Home')
  const {isDark} = useContext(Context)

  const onSetTab = event => {
    switch (true) {
      case event.target.value === 'Home' ? event.target.value : null:
        setTab('Home')
        break
      case event.target.value === 'Trending' ? event.target.value : null:
        setTab('Trending')
        break
      case event.target.value === 'Gaming' ? event.target.value : null:
        setTab('Gaming')
        break
      default:
        setTab(event.target.value)
    }
  }

  const onTabsDayorNight = () => {
    if (isDark) {
      return '#e2e8f0'
    }
    return '#909090'
  }

  const onTabsDayorNightFontColor = () => {
    if (isDark) {
      return '#212121'
    }
    return '#ebebeb'
  }

  const normalColor = () => '#7e858e'

  const onTabs = () => (
    <Tabs backgroundcolor={isDark ? '#ffffff' : '#313131'}>
      <div>
        <Link to="/" style={{textDecoration: 'none'}}>
          <TabButton
            onClick={onSetTab}
            value="Home"
            backgroundcolor={tabs === 'Home' ? onTabsDayorNight : 'transparent'}
            colors={tabs === 'Home' ? onTabsDayorNightFontColor : normalColor}
            fontweight={tabs === 'Home' ? 600 : 400}
            type="button"
          >
            <IoHomeSharp
              className={tabs === 'Home' ? 'tabs' : 'colorlessTabs'}
            />
            Home
          </TabButton>
        </Link>
        <Link to="/trending" style={{textDecoration: 'none'}}>
          <TabButton
            onClick={onSetTab}
            value="Trending"
            backgroundcolor={
              tabs === 'Trending' ? onTabsDayorNight : 'transparent'
            }
            colors={
              tabs === 'Trending' ? onTabsDayorNightFontColor : normalColor
            }
            fontweight={tabs === 'Trending' ? 600 : 400}
            type="button"
          >
            <FaFire
              className={tabs === 'Trending' ? 'tabs' : 'colorlessTabs'}
            />
            Trending
          </TabButton>
        </Link>
        <Link to="/gaming" style={{textDecoration: 'none'}}>
          <TabButton
            onClick={onSetTab}
            value="Gaming"
            backgroundcolor={
              tabs === 'Gaming' ? onTabsDayorNight : 'transparent'
            }
            colors={tabs === 'Gaming' ? onTabsDayorNightFontColor : normalColor}
            fontweight={tabs === 'Gaming' ? 600 : 400}
            type="button"
          >
            <SiYoutubegaming
              className={tabs === 'Gaming' ? 'tabs' : 'colorlessTabs'}
            />
            Gaming
          </TabButton>
        </Link>
        <Link to="/saved-videos" style={{textDecoration: 'none'}}>
          <TabButton
            type="button"
            onClick={onSetTab}
            value="Saved-videos"
            backgroundcolor={
              tabs === 'Saved-videos' ? onTabsDayorNight : 'transparent'
            }
            colors={
              tabs === 'Saved-videos' ? onTabsDayorNightFontColor : normalColor
            }
            fontweight={tabs === 'Saved-videos' ? 600 : 400}
          >
            <MdPlaylistAdd
              className={tabs === 'Saved-videos' ? 'tabs' : 'colorlessTabs'}
            />
            Saved videos
          </TabButton>
        </Link>
      </div>
      <Social>
        <SocialPara isDark={isDark ? '#181818' : '#f1f5f9'}>
          CONTACT US
        </SocialPara>
        <SocialMedia>
          <SocialImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <SocialImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <SocialImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </SocialMedia>
        <SocialPara isDark={isDark ? '#181818' : '#f1f5f9'}>
          ENJOY! NOW to see your channels and recommendations!
        </SocialPara>
      </Social>
    </Tabs>
  )

  return onTabs()
}

export default TabSection
