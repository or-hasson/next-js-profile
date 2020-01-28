import Header from "../shared/Header";
import React from "react";



const BaseLayout = (props) =>{
    return(
        <React.Fragment>
            <Header/>
            {props.children}
        </React.Fragment>
    )
};

export default BaseLayout;