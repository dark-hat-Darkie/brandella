import React from "react";
import "./header.scss";
import { Menu, Image, Row, Col, Button, Affix } from "antd";
import {
    TeamOutlined,
    ThunderboltOutlined,
    ReconciliationOutlined,
    SmileOutlined,
    MailOutlined,
} from "@ant-design/icons";

const Header = () => {
    return (
        <div className="menu-wrapper ">
            <Affix offsetTop={-1}>
                <div className="blur"></div>
                <Menu
                    className="menu container"
                    mode="horizontal"
                    defaultSelectedKeys={["mail"]}
                >
                    <Menu.Item key="logo" className="menu-item-logo">
                        <Image
                            src="https://i.ibb.co/wpgsWMd/logo.png"
                            width={200}
                            preview={false}
                        />
                    </Menu.Item>
                    <Menu.Item
                        key="about"
                        icon={<TeamOutlined />}
                        className="menu-item"
                    >
                        About Us
                    </Menu.Item>
                    <Menu.Item
                        key="works"
                        icon={<ThunderboltOutlined />}
                        className="menu-item"
                    >
                        Our Works
                    </Menu.Item>
                    <Menu.Item
                        key="services"
                        icon={<ReconciliationOutlined />}
                        className="menu-item"
                    >
                        Services
                    </Menu.Item>
                    <Menu.Item
                        key="clients"
                        icon={<SmileOutlined />}
                        className="menu-item"
                    >
                        Clients
                    </Menu.Item>
                    <Menu.Item
                        key="contact"
                        icon={<MailOutlined />}
                        className="menu-item"
                    >
                        Contact
                    </Menu.Item>
                </Menu>
            </Affix>
            <Row
                className="hero-section container"
                justify="space-around"
                align="middle"
            >
                <div>
                    <h1 className="site-title">
                        Brandella helps your business to be visible in all
                        possible digital platforms
                    </h1>
                    <p className="site-subtitle">
                        Brandella is a vision that took shape in the form of a
                        company in order to provide all encompassing digital
                        solutions for the fast moving business world of today
                    </p>
                </div>
                <Image
                    className="hero-image"
                    src="https://svgshare.com/i/i0E.svg"
                    preview={false}
                />
            </Row>
        </div>
    );
};

export default Header;
