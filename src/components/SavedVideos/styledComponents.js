import style from 'styled-components'

export const SavedList = style.li`
list-style:none;
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:flex-start;
margin-bottom:20px;
`
export const ThumbNail = style.img`
height:200px;
width:350px;
margin-right:20px;
`
export const Title = style.h1`
font-family:Roboto;
font-size:18px;
color:${props => props.isDark};
`
export const Para = style.p`
font-size:15px;
font-family:Roboto;
color:${props => props.isDark};
`
export const ViewsAndReview = style.div`
display:flex;
flex-direction:row;
align-items:center;
`
