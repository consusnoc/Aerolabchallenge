import Head from 'next/head';

const layoutStyle = {
    margin: 0,
    padding: 0,
    height: '100%',
    backgroundColor: '#f9f9f9'
}

const Layout = (props) => (
    <div style={layoutStyle}>
        {props.children}
    </div>
);

export default Layout;