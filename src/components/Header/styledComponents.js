import style from 'styled-components'

export const NavContainer = style.nav`
background-color:${props => (props.background ? '#ffffff' : '#313131')};
height: 10vh;
padding: 10px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
place-items: 0px;
width: 90vw;
padding-left: 0px;
width: 100%;
margin-bottom: 0px;
padding-bottom: 0px;
position:fixed;
z-index:9999;
top:0;
`
export const Image = style.img`
height:35px;
width:${props => props.width}px;
margin-left:20px;
margin-right:20px;
cursor:pointer;
`
export const Options = style.div`
display:flex;
flex-direction:row;
align-items:center
`
export const LogoutButton = style.button`
border:1px solid ${props => (props.isDark ? '#3b82f6' : '#000000')};
border-radius:8px;
width:80px;
padding:5px;
color:${props => (props.color ? '#3b82f6' : '#000000')};
background-color:transperant;
cursor:pointer;
margin-right:20px;
`
export const DayorNight = style.button`
border:none;
background-color:transparent;
padding:5px;
cursor:pointer;
`
export const LogoutContainer = style.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:${props => props.background};
width:100%;
height:300px;
`
export const LogoutPara = style.p`
font-size:18px;
font-family:Roboto;
color:${props => props.isDark};
`
export const LogoutRow = style.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`
export const Button = style.div`
background-color:${props => props.backgroundcolor};
color:${props => props.color};
padding:8px;
width:80px;
margin-right:20px;
border-radius:8px;
border:1px solid #ebebeb;
cursor:pointer;
`
