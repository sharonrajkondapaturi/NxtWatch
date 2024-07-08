import style from 'styled-components'

export const Video = style.li`
list-style:none;
margin-right:20px;
width:340px;
height:400px;
`
export const Image = style.img`
height:200px;
width:340px;
margin-bottom:10px;
`
export const DoubleContainer = style.div`
display:flex;
flex-direction:row;
justify-content:${props => props.content};
align-items:flex-start;
`
export const ProfileImage = style.img`
height:30px;
width:30px;
margin-right:10px;
`
export const Details = style.div`
display:flex;
flex-direction:column;
`
export const Title = style.p`
color:#616e7c;
font-family:Roboto;
font-size:14px;
margin:0px;
`
export const Name = style.p`
color:#94a3b8;
font-family:Roboto;
margin-top:5px;
margin-bottom:0px;
font-size:15px;
`
export const Views = style.p`
font-family:Roboto;
font-size:15px;
color:#94a3b8;
margin-right:10px;
`
export const PublishedAt = style.p`
font-family:Roboto;
font-size:15px;
color:#94a3b8;
`
