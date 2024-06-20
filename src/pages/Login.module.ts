import { BorderLeftOutlined } from "@ant-design/icons"
import { relative } from "path"
import React from "react"

const loginOutSideContainer: React.CSSProperties = {
  minHeight: '100vh',
  width: '100%',
  background: '#1b1b1b',
  position: 'absolute'
}

const loginAnimationContainer: React.CSSProperties = {
  width: '320px',
  height: '480px',
  position: 'relative',
  margin: '6% auto',
  background: '#1b1b1b',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden'
}

const s: React.CSSProperties = {
  position: 'absolute',
  transition: '0.5s'
}

const s_top: React.CSSProperties = {
  top: 0,
  right: 0,
  height: '2px',
  width: '200px',
  background: 'linear-gradient( to left , transparent, #57AAB4, #57AAB4)',
  animation: 'anim2 2s linear infinite',
  transform: 'translateY(-300%)',
  animationDelay: '0.8s',
}

const s_right: React.CSSProperties = {
  bottom: 0,
  right: 0,
  width: '2px',
  height: '200px',
  background: 'linear-gradient( to top , transparent, #57AAB4, #57AAB4)',
  animation: 'anim1 2s linear infinite',
  animationDelay: '0s'
}

const s_bottom: React.CSSProperties = {
  right: 0,
  bottom: 0,
  width: '200px',
  height: '2px',
  background: 'linear-gradient( to left , transparent, #57AAB4, #57AAB4)',
  animation: 'anim2 2s linear infinite'
}

const s_left: React.CSSProperties = {
  left: 0,
  top: 0,
  width: '2px',
  height: '200px',
  background: 'linear-gradient( to top , transparent, #57AAB4, #57AAB4)',
  animation: 'anim1 2s linear infinite',
  animationDelay: '1s',
  transform: 'translateX(-300%)'
}

const   s_s_t: React.CSSProperties = {
  ...s,
  ...s_top
}

const s_s_r: React.CSSProperties = {
  ...s,
  ...s_right
}

const s_s_b: React.CSSProperties = {
  ...s,
  ...s_bottom
}

const s_s_l: React.CSSProperties = {
  ...s,
  ...s_left
}

const loginFormContainer: React.CSSProperties = {
  width: '316px',
  height: '476px',
  position: 'relative',
  background: '#252525',
  padding: '5px',
  overflow: 'hidden',
  zIndex: 5
}

const formDivT: React.CSSProperties = {
  width: '50%',
	height: '100%',
	content: "",
	position: 'absolute',
	top: 0,
	left: '50%',
 	background: '#2d2e30', 
	zIndex: '-1',
	transition: '0.5s'
}

const formDivTButton: React.CSSProperties = {
  width: '220px',
	margin: '35px auto 30px auto',
	position: 'relative',
	borderRadius:'30px', 
	display: 'flex',
	justifyContent: 'space-around',
	animation: 'animBTN 5s linear infinite'
}

const btn: React.CSSProperties = {
  position: 'absolute',
	top: 0,
	left: 0,
	width: '110px',
	height: '100%',
	background: 'linear-gradient( to left , #57AAB4,#57AAB4)',
	borderRadius: '30px',
	transition: '0.5s' 
}

const btnStyle: React.CSSProperties = {
  padding: '10px 30px',
	cursor: 'pointer',
	background: 'transparent',
	border: 0,
	fontSize: '14px',
	fontWeight: 'bold',
	color: 'rgb(234, 234, 235)',
	outline: 'none',
	position: 'relative',
	transition: '0.5s'
}

const formInputGroup: React.CSSProperties = {
  width: '320px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  top: '180px',
  position: 'absolute',
  padding: '0 30px',
  transition: '0.5s',
  boxSizing: 'border-box'
}

const formInputField: React.CSSProperties = {
  width: '100%',
	padding: '10px 5px',
	margin: '10px 0',
	borderTop: 0,
	borderLeft: '2px solid #57AAB4',
	borderRight: 0,
	borderBottom: '2px solid #57AAB4',
	outline: 'none',
	background: 'transparent', 
	color: 'rgb(234, 234, 235)',
	fontSize: '15px',
	transition: '0.5s'
} 

const formInputFieldFocus: React.CSSProperties = {
  ...formInputField,
  borderLeft: '2px solid transparent',
	borderBottom: '2px solid transparent',
 	animation: 'animINP 5s linear infinite,animBTN 5s linear infinite'
}

const formSubButton: React.CSSProperties = {
  width: '85%',
  padding: '10px 30px',
  cursor: 'pointer',
  display: 'block',
  margin: '30px auto 0 auto',
  background: 'linear-gradient(to right, #03a9f4,#57AAB4,#03a9f4)',
  border: 0,
  outline: 'none',
  borderRadius: '30px', 
  position: 'relative',
  zIndex: 5,
   boxSizing: 'border-box',   
   color: '#fff',
   fontWeight: 'bold',
   fontSize: '15px', 
   transition: '0.5s'
}

const loginStyle: React.CSSProperties = {
  minHeight: '100vh',
  display: 'flex', // flex布局
  justifyContent: 'center', // 水平居中
  alignItems: 'center', // 垂直居中
  flexDirection: 'column', // 让登录布局至少占据整个视口高度，确保居中效果
  backgroundColor: '#f5f5f5'
}

const loginContainer: React.CSSProperties = {
  // width: 600,
  // height: 315,
  // margin: '0 auto',
  // marginTop: '10%',
  // borderRadius: 16,
  // boxShadow: '0 10px 50px 0px rbg(59, 45, 159)',
  // backgroundColor: 'rgb(95, 76, 194)'
  minHeight: '100vh',
  width: '100%',
  background: '#1b1b1b',
  position: 'absolute'
}

const leftContainer: React.CSSProperties = {
  display: "inline-block",
  width: '330px',
  borderTopLeftRadius: '15px',
  borderBottomLeftRadius: '15px',
  padding: '60px',
  backgroundImage: 'linear-gradient(to bottom right, rgb(118, 76, 163), rgb(92, 103, 211))'
}

const title: React.CSSProperties = {
  // color: '#fff',
  // fontSize: '18px',
  // fontWeight: '200'
  padding: '20px 0'
}

const rightContainer: React.CSSProperties = {
  width: '145px',
  display: "inline-block",
  height: 'calc(100% - 120px)',
  verticalAlign: 'top',
  padding: '60px 0'
}

const registerContainer: React.CSSProperties = {
  width: 600,
  height: 395,
  margin: '0 auto',
  marginTop: '10%',
  textAlign: 'center',
  color: '#fff',
  fontSize: '18px',
  fontWeight: 200,
  borderRadius: 16,
  boxShadow: '0 10px 50px 0px rbg(59, 45, 159)',
  backgroundColor: 'rgb(95, 76, 194)'
}

const inlineStyle: React.CSSProperties = {
    padding: '50px 50px',
    maxWidth: 400,
    margin: 'auto auto',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '450px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
    borderRadius: 16, // 可选，增加边角圆润度
    boxShadow: '0 4px 10px 2px rgba(0, 0, 0, 0.2)', // 可选，增加阴影效果
};

// export {loginContainer, leftContainer, title, rightContainer, registerContainer, loginStyle, inlineStyle}
export {
  loginOutSideContainer,
  loginAnimationContainer,
  s_s_t, s_s_r, s_s_b, s_s_l,
  loginFormContainer,
  formDivT,
  formDivTButton,
  btn,
  btnStyle,
  formInputGroup,
  formInputField,
  formInputFieldFocus,
  formSubButton
}