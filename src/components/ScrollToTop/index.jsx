import React, { useEffect } from "react";
import { useLocation, withRouter } from "react-router-dom";


function ScrollToTopp() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export { ScrollToTopp }

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if (
            this.props.location.pathname !== prevProps.location.pathname
        ) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        return null;
    }
}

export default withRouter(ScrollToTop);