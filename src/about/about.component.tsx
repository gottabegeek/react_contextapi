import React, { FunctionComponent, useContext } from "react";
import AboutContext, { IAboutContext } from "./about.context";

const About: FunctionComponent = () => {
    const aboutContext = useContext<IAboutContext>(AboutContext);
    return (
        <div>
            <h1>About</h1>
            <p>{aboutContext.aboutText}</p>
        </div>
    )
}

export default About;