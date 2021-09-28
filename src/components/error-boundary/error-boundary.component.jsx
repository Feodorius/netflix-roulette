import React from "react";
import "./error-boundary.styles.scss";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-container">
                    <h2 className="error-text">Oops! Something went wrong.</h2>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;