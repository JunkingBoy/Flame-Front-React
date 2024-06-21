const loginFormContainer: React.CSSProperties = {
    width: '316px',
    height: '476px',
    position: 'relative',
    background: '#252525',
    padding: '5px',
    overflow: 'hidden',
    zIndex: 5
  }
  
const formDivLeft: React.CSSProperties = {
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

export {
    loginFormContainer,
    formDivLeft,
    formInputGroup,
    formInputField,
    formSubButton
}