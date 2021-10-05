import React from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";




const CustomButton = ({ children, ...otherProps }) => {
    const { variant, handleClick, width, height } = { ...otherProps };

    const styles = makeStyles({
        [variant]: { width, height }
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

CustomButton.propTypes = {
    variant: PropTypes.string,
    handleClick: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.string

};
CustomButton.defaultProps = { width: "180px", height: "56px" };


export default CustomButton;