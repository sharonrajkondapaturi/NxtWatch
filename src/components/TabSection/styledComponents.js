import style from 'styled-components'

export const Tabs = style.div`
display:flex;
flex-direction:column;
justify-content:space-between;
min-height:91vh;
background-color:${props => props.backgroundcolor};
max-width:15vw;
position:fixed;
`
export const TabButton = style.button`
border:none;
background-color:${props => props.backgroundcolor};
color:${props => props.colors};
font-weight:${props => props.fontweight};
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
padding:10px;
cursor:pointer;
font-size:15px;
font-family:Roboto;
width:100%;
`
export const Social = style.div`
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:center;
`
export const SocialMedia = style.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center
`
export const SocialImage = style.img`
height:30px;
width:35px;
margin-right:10px;
`
export const SocialPara = style.p`
font-size:Roboto;
font-size:15px;
color:${props => props.isDark};
text-align:center;
`
