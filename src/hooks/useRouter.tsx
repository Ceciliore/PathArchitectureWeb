import { useMemo } from "react";
import {
    useParams,
    useLocation,
    useNavigate,
    useMatch,
} from "react-router-dom";
import queryString from "query-string";

const useRouter = () => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const match = useMatch(location.pathname); // opcional, depende se você usa `match`

    return useMemo(() => ({
        push: navigate,
        replace: (path: string) => navigate(path, { replace: true }),
        pathname: location.pathname,
        query: {
            ...queryString.parse(location.search),
            ...params,
        },
        match,
        location,
        navigate,
    }), [params, location, match, navigate]);
};

export default useRouter;
