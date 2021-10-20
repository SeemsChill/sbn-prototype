//  Import built-in.
import React from "react";

//  Import styles.
import section from "../Section.module.scss";

const Span = ({ spanRef, callback, children }) => {
    
    return(
        <span ref={spanRef} onClick={callback}>
            {children}
        </span>
    );
};

export default Span;