const Header_Bg ={
    background: "url('../static/img/header-img.png') center center no-repeat",
    backgroundSize: 'cover',
    height: '412px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
}

const HeaderTitle = {
    color: '#fff',
    width: '50%',
    margin: '.9em',
    fontSize: '64px',
    lineHeight: '1em',
    textAlign: 'left'
}

const Header = () => (
    <div style={Header_Bg}>
        <h1 style={HeaderTitle}>Electronics</h1>     
    </div>
)
export default Header;