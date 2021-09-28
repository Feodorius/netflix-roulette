import React from "react";
import "./logo.styles.scss";
import PropTypes from "prop-types";


const Logo = ({ isHeaderLogo }) => (
    <div className={`${isHeaderLogo ? 'logo-header' : ''} logo`}>
        <span className="bold">netflix</span>
        <span className="regular">roulette</span>
    </div>
);

Logo.propTypes = {
    isHeaderLogo: PropTypes.bool
};

export default Logo;