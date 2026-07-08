import "@styles/Header.scss"
import { logo } from "@assets"
import { MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useEffect, useState } from "react";
import { MdWorkOutline } from "react-icons/md"
import { FaEnvelope } from "react-icons/fa"
import { Link, useLocation, useNavigate } from "react-router-dom";


const Header: React.FC = () => {

    const [collapsed, setCollapsed] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    const location = useLocation();
    const navigate = useNavigate();


    const menuItemsColor = (path: string) => {
        if (location.pathname.includes(path))
            return "#ef0454"
        return "white"
    }

    const items: MenuProps['items'] = [
        {
            key: '0',
            icon: <FaEnvelope style={{ fill: menuItemsColor("/contact"), color: "white", position: "relative", top: "1px", left: "5px" }} size={16} />,
            label: <Link style={{ color: menuItemsColor("/contact") }} onClick={() => setCollapsed(!collapsed)} to="/contact">Contact Me</Link>
        },
        // {
        //     key: '1',
        //     icon: <FaInfoCircle style={{fill: menuItemsColor("/about"), position: "relative", left: "5px" }} size={15} />,
        //     label: <Link style={{ color: menuItemsColor("/about") }} onClick={() => setCollapsed(!collapsed)} to="/about">About Me</Link>
        // },
        {
            key: '2',
            icon: <MdWorkOutline style={{ fill: location.pathname === "/" ? "#ef0454" : "white", position: "relative", left: "5px" }} size={15} />,
            label: (
                <a
                    href="/"
                    onClick={(e) => {
                        e.preventDefault()
                        setCollapsed(!collapsed)
                        if (location.pathname === "/") {
                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                        } else {
                            navigate("/")
                            setTimeout(() => {
                                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                            }, 150)
                        }
                    }}
                    style={{ color: location.pathname === "/" ? "#ef0454" : "white" }}
                >
                    Portfolio
                </a>
            )
        },
        // {
        //     key: '2',
        //     icon: <FaOsi style={{ fill: menuItemsColor("/source"), position: "relative", top: "1px", left: "5px"}} size={16} />,
        //     label: <Link style={{ color: menuItemsColor("/source") }} onClick={() => setCollapsed(!collapsed)} to="/source">Open Source</Link>
        // }
    ]

    const toggleCollapsed = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        setCollapsed(!collapsed);
    }

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [width]);


    useEffect(() => {
        setCollapsed(true);
    }, [location])


    return (
        <div className="Header">

            <div style={{ zIndex: 10001, height: 45 }} className="left mt-2">
                <Link to="/" >
                    <img src={logo} alt="header-logo" />
                </Link>
            </div>
            <div className="right collapsed-menu">
                {(!collapsed) && (
                    <div onClick={toggleCollapsed} className="collapsed-menu-wrapper" />
                )}
                {(!collapsed) && (
                    <Menu
                        style={{ width: 160, zIndex: 10009 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode={"inline"}
                        theme="dark"
                        inlineCollapsed={collapsed}
                        items={items}
                        className="menu-items"
                    />

                )}


                <Button className="d-flex align-items-center justify-content-center" onClick={toggleCollapsed} style={{ width: "40px", height: "40px" }}>
                    <MenuOutlined style={{ color: "white", fontSize: "20px" }} />
                </Button>


            </div>
            < div className="right menu-full" style={{ background: "transparent" }}>
                <Menu
                    style={{ width: "100%", background: "transparent" }}
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
            </div>
        </div >
    )
}

export default Header