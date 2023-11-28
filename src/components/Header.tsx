import "@styles/Header.scss"
import { logo } from "@assets"
import { MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useState } from "react";
import { MdWorkOutline, MdOutlineBadge, MdCode } from "react-icons/md"
import { Link } from "react-router-dom";


const items: MenuProps['items'] = [
    {
        key: '1',
        icon: <MdWorkOutline style={{ position: "relative", left: "5px" }} size={15} />,
        label: <Link to="/portfolio">Portfolio</Link>
    },
    {
        key: '2',
        icon: <MdOutlineBadge style={{ position: "relative", left: "5px" }} size={15} />,
        label: <Link to="/about">About Me</Link>
    },
    {
        key: '3',
        icon: <MdCode style={{ position: "relative", top: "2px", left: "5px" }} size={18} />,
        label: <Link to="/skills">Skills</Link>
    }
]

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };


    return (
        <div className="Header">
            <div className="left">
                <Link to="/">
                    <img src={logo} alt="header-logo" />
                </Link>
            </div>

            <div className="right collapsed-menu">
                {(!collapsed) && (
                    <Menu
                        style={{ width: 150 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode={"inline"}
                        theme="dark"
                        inlineCollapsed={collapsed}
                        items={items}
                        className="menu-items"
                    />
                )}
                <div>
                    <Button className="d-flex align-items-center justify-content-center" onClick={toggleCollapsed} style={{ width: "40px", height: "40px" }}>
                        <MenuOutlined style={{ color: "white", fontSize: "20px" }} />
                    </Button>
                </div>
            </div>

            < div className="right menu-full">
                <Menu
                    style={{ width: "100%" }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode={"horizontal"}
                    theme="dark"
                    items={items}
                    className="menu-items-full"
                    onClick={(e) => {
                        console.log(e);
                    }}
                />

                <div>
                    <Button className="d-flex align-items-center justify-content-center" onClick={toggleCollapsed} style={{ height: "50px" }}>
                        <b style={{ color: "white" }}>Get my Resume</b>
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default Header