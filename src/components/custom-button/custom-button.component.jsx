import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles";




const CustomButton = ({ children, ...otherProps }) => {
    const { variant, handleClick, width, height } = { ...otherProps };

    const styles = makeStyles({
        [variant]: {
            width: width || "180px",
            height: height || "57px"            
        }
    })();

    return (
        <Button
            classes={{ [variant]: styles[variant] }}
            variant={variant}
            onClick={handleClick}
            width={width}
            height={height}>
            {children}
        </Button>
    )
};

export default CustomButton;