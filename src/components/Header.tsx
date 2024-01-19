import "@styles/Header.scss"
import { logo } from "@assets"
import { MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useEffect, useState } from "react";
import { MdWorkOutline } from "react-icons/md"
import { FaOsi } from "react-icons/fa"
import { FiMail, FiDownload,  } from "react-icons/fi"
import { Link, useLocation } from "react-router-dom";
import { PDF, Modal } from "@components";


const Header = () => {

    const [collapsed, setCollapsed] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const location = useLocation();


    const menuItemsColor = (path: string) => {
        if (location.pathname.includes(path))
            return "#ef0454"
        return width > 600 ? "black" : "white"

    }


    const items: MenuProps['items'] = [
        {
            key: '1',
            icon: <MdWorkOutline style={{ color: menuItemsColor("/portfolio"), position: "relative", left: "5px" }} size={15} />,
            label: <Link style={{ color: menuItemsColor("/portfolio") }} onClick={() => setCollapsed(!collapsed)} to="/portfolio">Portfolio</Link>
        },
        {
            key: '2',
            icon: <FaOsi style={{ color: menuItemsColor("/contact"), position: "relative", top: "1px", left: "5px" }} size={16} />,
            label: <Link style={{ color: menuItemsColor("/contact") }} onClick={() => setCollapsed(!collapsed)} to="/contact">Open Source</Link>
        },
        // {
        //     key: '2',
        //     icon: <FiMail style={{ color: menuItemsColor("/contact"), position: "relative", top: "1px", left: "5px" }} size={16} />,
        //     label: <Link style={{ color: menuItemsColor("/contact") }} onClick={() => setCollapsed(!collapsed)} to="/contact">Contact Me</Link>
        // },

    ]



    const toggleCollapsed = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        if (!collapsed) {
        }
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


    const onMyResumeClick = () => {
        setIsModalOpen(true);
    }


    useEffect(() => {
        setCollapsed(true);
    }, [location])


    return (
        <div className="Header">

            <div style={{ zIndex: 10001, height: 45 }} className="left mt-2">
                <Link to="/">
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
                    <Button className="d-flex align-items-center justify-content-center" onClick={onMyResumeClick} style={{ height: "50px" }}>
                        <FiDownload style={{ color: "white", fontSize: "20px" }} />
                        <b className="ms-2" style={{ color: "white" }}>My Resume</b>
                    </Button>
                    <Modal onClose={(open: boolean) => setIsModalOpen(open)} open={isModalOpen} >
                        <PDF />
                    </Modal>
                </div>
            </div>
        </div >
    )
}

export default Header