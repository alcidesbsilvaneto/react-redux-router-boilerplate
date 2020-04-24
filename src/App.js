import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';

import ForgotPassword from './Views/ForgotPassword';
import Login from './Views/Login';
import ResetPassword from "./Views/ResetPassword";
import Home from './Views/Home';

function isAuthenticated(option) {
    return option;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated(false) ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                )
        }
    />
);


const LoginRoute = () => {
    return isAuthenticated(false) ? <Redirect to={"/app"} /> : <Login />;
};

const AppRoutes = () => (
    <Switch>
        <PrivateRoute exact path="/app" component={Home} />
        <PrivateRoute exact path="/app/home" component={Home} />
        <Route path="/app/*" component={() => <h1>Page not found</h1>} />
    </Switch >
)

const Routes = () => (
    <Provider store={Store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={LoginRoute} />
                <Route exact path="/recuperar_senha" component={ForgotPassword} />
                <Route exact path="/resetar_senha" component={ResetPassword} />
                <Route path="/cadastro" component={() => <h1>SignUp</h1>} />
                <PrivateRoute exact path="/app" component={AppRoutes} />
                <PrivateRoute exact path="/app/*" component={AppRoutes} />
                <PrivateRoute exact path="/" component={() => (<Redirect to={{ pathname: "/app" }} />)} />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
        <ToastContainer />
    </Provider>
);

export default Routes;