import Lazyload from 'react-lazyload'
import  CSSTransitionGroup  from 'react-transition-group'

const StyleGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: '30px',
    margin: '2em 0 4em 0'
            
}

const Container = {
    backgroundColor : '#fff',
    boxShadow: '2px 2px 4px 0 rgba(0,0,0,0.10)'
}

const ImgContainer = {
    height: '200px',
    width: '100%',
    objectFit: 'cover'
}

const InfoContainer = {
    fontSize : '18px'
}

export default class extends React.Component {
    render () {
        console.log(this.props)
        return (
            <div className="Wrapper">
                <div className="Card_Container">
                    <div className="Card_Upper">
                        <Lazyload throttle={200} height={300}>
                            <img className="img" src={this.props.img}/>
                        </Lazyload>
                    </div>
                    <div className="Card_Text">
                        <span className="Product_Category">{this.props.category}</span>
                        <span className="Product_Name">{this.props.name}</span>
                    </div>
                
                </div>
                <div className="Hover_Img">
                    <div className="Points">
                        <p>Hola</p><img src="../static/icons/coin.svg"/>
                        <button className="btn">Redeem now</button>
                    </div>
                </div>
                <style jsx>{`
                        .Wrapper {
                            
                        }
                        .Card_Container {
                            display: flex;
                            position: relative;
                            flex-direction:column;
                            justify-content: space-between;
                            background: #fff;
                            align-items: flex-start;
                            padding: 1em;
                            border-radius: 3px;
                            margin: auto;
                            transition: 0.3s ease box-shadow, 0.3s ease transform;
                            cursor: pointer;
                            box-shadow: 0 0 11px rgba(33,33,33,.2);
                        }
                        .Card_Container:hover {
                            box-shadow: 0 0 11px rgba(33,33,33,.2);
                            transform: scale(1.03);
                        }
                        .Card_Upper {
                            width:100%;
                            border-bottom: 1px solid #d9d9d9;
                            margin-bottom: .5em;
                        }
                        .Card_Text {
                            display:flex;
                            flex-direction: column;
                        }
                        .Product_Category {
                            font-size:16px;
                            line-height:2em;
                            color:#a3a3a3;
                            letter-spacing:-0.04px;
                        }
                        .Product_Name {
                            font-size:18px;
                            color:#616161;
                            letter-spacing:-0.04px;
                        }

                        .Hover_Img {
                            position: absolute;
                            opacity:.5;
                            background-image: linear-gradient(-180deg, rgba(10, 212, 250, 0.86) 0%, rgba(37, 187, 241, 0.86) 100%);
                            border-radius: 3px;
                            font-size: 1em;
                            color: white;
                            
                        }
                        .Hover_Img img {
                            height:24px;
                        }

                        .Wrapper .Hover_Img{
                            display:none;
                        }
                        .Wrapper:hover .Card_Container {
                             /*-webkit-filter: brightness(50%);*/
                            z-index:0;
                        }
                        .Wrapper:hover .Hover_Img {
                            display: block;
                            z-index:999;
                        }
                        
                            
                    `}</style>
            </div>
        )
    }
}