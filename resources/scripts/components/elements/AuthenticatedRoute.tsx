import React from 'react';
import { useStoreState } from '@/state/hooks';
import { Redirect, Route, RouteProps } from 'react-router';

export default ({ children, ...props }: Omit<RouteProps, 'render'>) => {
    const isAuthenticated = useStoreState((state) => !!state.user.data?.uuid);

    return (
        <Route
            {...props}
            render={({ location }) =>
                isAuthenticated ? children : <Redirect to={{ pathname: '/auth/login', state: { from: location } }} />
            }
        />
    );
};
