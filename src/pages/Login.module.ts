import { calc } from "antd/es/theme/internal"
import React from "react"

const loginStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex', // flex布局
    justifyContent: 'center', // 水平居中
    alignItems: 'center', // 垂直居中
    flexDirection: 'column', // 让登录布局至少占据整个视口高度，确保居中效果
    backgroundColor: '#f5f5f5'
  }

const loginContainer: React.CSSProperties = {
  width: 600,
  height: 315,
  margin: '0 auto',
  marginTop: '10%',
  borderRadius: 16,
  boxShadow: '0 10px 50px 0px rbg(59, 45, 159)',
  backgroundColor: 'rgb(95, 76, 194)'
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
  // borderBottom: '3px solid rgb(237, 221, 22)'
  textAlign: 'center',
  color: '#fff',
  fontSize: '18px',
  fontWeight: 200
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

export {loginContainer, leftContainer, title, rightContainer, registerContainer, loginStyle, inlineStyle}