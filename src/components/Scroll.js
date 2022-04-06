import React from "react";

const Scroll = (props) => {
    //console.log(props);
    return (
        <div
            style={{
                overflowY: "scroll",
                border: "3px solid black",
                height: "750px",
                padding: "2px"
            }}
        >
            {props.children}
        </div>
    );
};

export default Scroll;
