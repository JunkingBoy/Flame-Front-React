const formDivTButton: React.CSSProperties = {
    width: '220px',
    margin: '35px auto 30px auto',
    position: 'relative',
    borderRadius:'30px', 
    display: 'flex',
    justifyContent: 'space-around',
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

export { btn, btnStyle, formDivTButton }