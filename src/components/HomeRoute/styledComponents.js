import style from 'styled-components'

export const HomeContainer = style.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
background-color:${props => props.background};
max-width:85vw;
min-height:100vh;
background-size:cover;
`
export const VideoRow = style.ul`
display:flex;
flex-direction:row;
align-items:center;
flex-wrap:wrap;
overflow:visible;
overflow-y:scroll;
`
export const BackgroundImage = style.div`
background-image:url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
height:260px;
width:85vw;
display:${props => (props.displayScreen ? 'flex' : 'none')};
flex-direction:row;
justify-content:space-between;
align-items:flex-start;
padding:30px;
background-size:cover;
`
export const PremiumDetails = style.div`
display:flex;
flex-direction:column;
justify-content:center;
`

export const LogoImage = style.img`
width:150px;
height:35px;
`
export const PremiumDescription = style.p`
font-family:Roboto;
font-size:18px;
`
export const GetItNowButton = style.button`
background-color:Transparent;
color: #1e293b;
border:1px solid #1e293b;
padding:8px;
font-weight:500;
width:120px;
cursor:pointer;
`
export const CloseButton = style.button`
background-color:transparent;
border:none;
cursor:pointer;
`
export const InputSearch = style.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
padding:20px;
`
export const VideoInput = style.input`
padding:6px;
border:1px solid;
width:500px;
height:30px;
margin-left:20px;
`
export const SearchButton = style.button`
padding:6px;
border:none;
height:29px;
width:50px;
`
export const FailureContainer = style.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
`
export const FailureImage = style.img`
height:300px;
width:400px;
`
export const FailureHeading = style.h1`
color:${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
font-family:Roboto;
font-size:32px;
`
export const FailurePara = style.p`
color:#64748b;
font-family:Roboto;
font-size:18px;
`
export const FailureButton = style.button`
background-color:#4f46e5;
border:none;
color:#f1f5f9;
padding:8px;
`
