import style from 'styled-components'

export const MainContainer = style.div`
min-height:100vh;
`
export const DoubleContainer = style.div`
display:flex;
flex-direction:row;
justify-content:space-between;
min-height:100vh;
`
export const VideoContainer = style.div`
display:flex;
flex-direction:column;
padding:20px;
background-color:${props => props.background};
width:85vw;
`
export const BackgroundImage = style.div`
background-image:url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
height:260px;
width:100%;
display:f
flex-direction:row;
justify-content:space-between;
align-items:flex-start;
padding:30px;
background-size:cover;
`
export const FailureContainer = style.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const FailureImage = style.img`
height:300px;
width:500px;
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
export const Title = style.p`
color:${props => props.isDark};
font-family:Roboto;
font-size:18px;
`
export const DetailReview = style.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
`
export const ViewsAndTime = style.div`
display:flex;
flex-direction:row;
`
export const Para = style.p`
color:#94a3b8;
font-family:Roboto;
margin-right:10px;
`
export const ReviewButton = style.button`
border:none;
background-color:transparent;
margin-right:10px;
color:${props => props.isDark};
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
cursor:pointer;
font-size:18px;
`
export const HorizantalLine = style.hr`
color: #e2e8f0;
width:100%;
`
export const ProfileImage = style.img`
height:35px;
width:35px;
margin-right:20px;
`
export const YoutuberDetails = style.div`
display:flex;
flex-direction:column;
`
export const DetailsTop1 = style.p`
color:${props => props.isDark};
font-family:Roboto;
font-size:18px;
margin:0px;
`
export const DetailsTop2 = style.p`
color:${props => props.isDark};
font-family:Roboto;
font-size:15px;
padding-top:5px;
margin:0px;
`
