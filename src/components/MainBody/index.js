import Header from '../Header'
import TabSection from '../TabSection'
import HomeRoute from '../HomeRoute'
import {MainContainer, DoubleContainer} from './styledComponents'

const MainBody = () => (
  <MainContainer>
    <Header />
    <DoubleContainer>
      <div>
        <TabSection />
      </div>
      <div>
        <HomeRoute />
      </div>
    </DoubleContainer>
  </MainContainer>
)

export default MainBody
