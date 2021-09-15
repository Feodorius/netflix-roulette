import React from "react";
import "./logo.styles.scss";


const Logo = ({ isHeaderLogo }) => (
    <div className={`${isHeaderLogo ? 'logo-header' : ''} logo`}>
        <span className="bold">netflix</span>
        <span className="regular">roulette</span>
    </div>
);

export default Logo;