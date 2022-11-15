import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useMemo } from 'react';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    const stateProp = useMemo(() => ({ from: location }), [location]);

    if (!auth) {
        return (
            <Navigate
                to={RoutePath.main}
                state={stateProp}
                replace
            />
        );
    }

    return children;
}
