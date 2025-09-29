import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const withAuth = ( WrappedComponent ) => {

    const AuthComponent = (props) => {
        const router = useNavigate();

        const isAuthenticated = () => {
            if(localStorage.getItem("token")) {
                return true;
            }
            return false;

            // validate ka option bhi set kar sakte ho token kai bad
        }

        useEffect(() => {
            if(!isAuthenticated) {
                router("/auth")
            }
        }, [])

        return <WrappedComponent {...props} />
    }

    return AuthComponent;
}

export default withAuth;