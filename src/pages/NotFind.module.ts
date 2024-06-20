const RegisterStyle = 
{
    about: {
        position: 'fixed',
        zIndex: 10,
        bottom: '10px',
        right: '10px',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        transition: 'all 0.2s ease'
    },
    bg_links: {
        width: '40px',
        height: '40px',
        borderRadius: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        // borderRadius: '100%',
        backdropFilter: 'blur(5px)',
        position: 'absolute',
    },
    logo: {
        width: '40px',
        height: '40px',
        zIndex: 9,
        backgroundImage: 'url(https://rafaelavlucas.github.io/assets/codepen/logo_white.svg)',
        backgroundSize: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '10px 7px',
        opacity: 0.9,
        transition: 'all 1s 0.2s ease',
        bottom: 0,
        right: 0,
    },
    social: {
        opacity: 0,
        right: 0,
        bottom: 0,
    },
    socialIcon: {
        width: '100%',
        height: '100%',
        backgroundSize: '20px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'transparent',
        display: 'flex',
        transition: 'all 0.2s ease, background-color 0.4s ease',
        opacity: 0,
        borderRadius: '100%',
    },
    socialPortfolio: {
        transition: 'all 0.8s ease',
        backgroundImage: 'url(https://rafaelavlucas.github.io/assets/codepen/link.svg)',
    },
    socialDribbble: {
        transition: 'all 0.3s ease',
        backgroundImage: 'url(https://rafaelavlucas.github.io/assets/codepen/dribbble.svg)',
    },
    socialLinkedin: {
        transition: 'all 0.8s ease',
        backgroundImage: 'url(https://rafaelavlucas.github.io/assets/codepen/linkedin.svg)',
    },
    hoverAbout: {
        width: '105px',
        height: '105px',
        transition: 'all 0.6s cubic-bezier(0.64, 0.01, 0.07, 1.65)',
    },
    hoverLogo: {
        opacity: 1,
        transition: 'all 0.6s ease',
    },
    hoverSocial: {
        opacity: 1,
    },
    hoverSocialIcon: {
        backgroundSize: '28px',
        opacity: 1,
    }
}

export { RegisterStyle } ;