import { Navigate } from "react-router-dom";

export default function PrivateRoutes(props) {
    const IsloggedIn = true;
    return (<>
        {IsloggedIn ?
            <>{props.children}</> :
            <><Navigate to="/categories" /></>}
    </>)
    
};
