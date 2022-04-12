import React, {useRef} from "react";
import {TextField} from "@material-ui/core";

export default function MUI_With_Ref()
{
    const textRef = useRef();
    const showRefContent = () =>
    {
        alert(textRef.current.value);
    };
    return (
        <div>
            <TextField inputRef={textRef} />
            <button onClick={showRefContent}>Click</button>
        </div>
    );
}