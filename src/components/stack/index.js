import "./style.css";

import { useState, useEffect } from "react";

const Stack = ({ stack }) => {
    const [color1, setColor1] = useState("#bae8e8");
    const [color2, setColor2] = useState("#575757");
    useEffect(() => {
        switch (stack.toLowerCase()) {
            case "nodejs":
            case "expressjs":
                setColor1("#303030");
                setColor2("#68A063");
                break;
            case "reactjs":
            case "redux":
            case "redux-saga":
                setColor1("#1c2c4c");
                setColor2("#7cc5d9");
                break;
            case "java":
                setColor1("#F14C4D");
                setColor2("#000000");
                break;
            case "html":
                setColor1("#7b1e7a");
                setColor2("#f3c677");
                break;
            case "css":
                setColor1("#000000");
                setColor2("#f6d55c");
                break;
            case "mongodb":
            case "mongoose":
                setColor1("#4DB33D");
                setColor2("#3F3E42");
                break;
            case "mysql":
            case "sequelize":
                setColor1("#F29111");
                setColor2("#00758F");
                break;
            default:
                break;
        }
    }, [stack]);

    return (
        <div className="stack-element"
            style={{
                color: color1,
                backgroundColor: color2,
                borderColor: color1
            }}
        >
            #{stack}
        </div>
    );
};

export default Stack;