import style from 'styled-components'

export const LoginContainer = style.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
min-height:100vh;
background-color:${props => props.isDark};
`
export const Form = style.form`
display:flex;
flex-direction:column;
align-items:center;
padding:20px;
min-height:400px;
max-height:400px;
min-width:500px;
max-width:500px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
background-color:${props => props.isDark};
`
export const InContainer = style.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
`
export const Image = style.img`
height:40px;
width:150px;
margin-bottom:40px;
margin-top:20px;
`
export const Credentials = style.label`
font-family:Roboto;
color:${props => props.isDark};
font-size:15px;
cursor:pointer;
margin-bottom:5px;
`
export const CredentialsInput = style.input`
height:40px;
padding:10px;
border:1px solid #cbd5e1;
font-family:Roboto;
font-size:15px;
border-radius:8px;
padding-left:8px;
margin-bottom:20px;
width:400px;
`
export const PasswordContainer = style.div`
display:flex;
align-items:center;
margin-bottom:20px;
`
export const CheckInput = style.input`
padding:15px;
margin-right:10px;
cursor:pointer;
`
export const ShowPassword = style.label`
color:${props => props.isDark};
font-family:Roboto;
font-size:15px;
cursor:pointer;
`
export const LoginButton = style.button`
background-color:#3b82f6;
font-family:Roboto;
padding:10px;
border:none;
border-radius:8px;
color:#ffffff;
width:400px;
font-weight:bold;
font-size:14px;
line-height:18px;
cursor:pointer;
`
export const Error = style.p`
color:${props => props.color};
font-family;Roboto;
font-size:18px;
`
