import React from "react";
import "./about-us.scss";

import { Image, Row, Col } from "antd";
import ReactPlayer from "react-player/file";
import intro from "../../assets/intro.mp4";

const AboutUs = () => {
    return (
        <>
            <Row className="about-us ">
                <div className="container" style={{ width: "100%" }}>
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        controls
                        url={intro}
                    />
                </div>
            </Row>
        </>
    );
};

export default AboutUs;
