import Link from 'next/link';

const Topbar =  ( { user } )  => (
    <div>
        <div className= 'Topbar_Container'>
            <Link href="/">
                <img className= 'Brand_Logo' src="../static/img/aerolab-logo.svg"></img>
            </Link>
            <div className="User_Profile">
                <span className="User_Name">{user.name}</span>
                <div className="User_Points">
                    {user.points}
                    <img src="../static/icons/coin.svg" />
                </div>
            </div>
        </div>
        <style jsx>{`
            .Topbar_Container {
                background-color: #fff;
                padding: 0 1.3em;
                height: 80px;
                display: flex;
                justify-content: space-between;
                align-items:center;
            }
            .Brand_Logo {
                width: 39px;
                height: 40px;
                cursor:pointer;
            } 
            .User_Profile {
                display: inline-flex;
                align-items: center;
               
                font-size: 24px;
                color: #616161;
                letter-spacing:-0.15px;
                text-align:left;
            }
            .User_Name {
                 padding-right: .8em;
            }
            .User_Points {
                background-color: #ededed;
                border-radius: 100px;
                padding: .4em .6em;
                display: flex;
                align-items: center;
                cursor:pointer;
            }
            .User_Points img {
                width: 24px;
                height: 24px;
                margin-left: 8px;
            }

        `}</style>
    </div>

);

export default Topbar;