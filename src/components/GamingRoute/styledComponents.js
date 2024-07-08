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
export const GameRow = style.ul`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`
