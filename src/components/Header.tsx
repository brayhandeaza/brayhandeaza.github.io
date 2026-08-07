import "@styles/Header.scss"
import { logo } from "@assets"
import { Link } from "react-router-dom";


const Header: React.FC = () => {

    return (
        <div className="Header">
            <div style={{ zIndex: 10001, height: 45 }} className="left mt-2">
                <Link to="/" >
                    <img src={logo} alt="header-logo" />
                </Link>
            </div>                        
        </div >
    )
}

export default Header