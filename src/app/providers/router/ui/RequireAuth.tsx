import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return (
            <Navigate
                to={RoutePath.main}
                // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
}
