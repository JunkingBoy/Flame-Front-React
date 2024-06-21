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
  animationDuration: '2s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
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

const s_s_t: React.CSSProperties = {
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

export {
  loginOutSideContainer,
  loginAnimationContainer,
  s_s_t, s_s_r, s_s_b, s_s_l,
}