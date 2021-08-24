import { Route, Redirect  } from 'react-router-dom';

export default function PrivateRoute({component:Component, ...rest}){

  const isAuthenticated = localStorage.getItem('token');

  return (
    <Route
        {...rest}
        render={props =>
         !isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/home", state: { referer: props.location } }} />
            )
        }
    />
);
}