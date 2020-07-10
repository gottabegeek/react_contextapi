import React, { FunctionComponent } from "react";

export interface IAboutContext {
    aboutText: string;
}

const AboutContext = React.createContext<IAboutContext>(null);

export const AboutProvider: FunctionComponent = (props: { children?: React.ReactNode }) => {
    return (
        <AboutContext.Provider value={{ aboutText: "This is the about page info from the context API." }}>
            {props.children}
        </AboutContext.Provider>
    );
}

export default AboutContext;