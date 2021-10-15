//  Import built-in.
import React from "react";

const Container = ({ children }) => {

    return(
        <div className={"container container-pall flex flex-jc-c flex-ai-c"}>
            {children}
        </div>
    )
};

export default Container;