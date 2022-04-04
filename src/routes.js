import React from "react";
import { Spinner } from "./components/Spinner";
import { Redirect, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./helpers";
// import { history } from "helpers/browser";

const Login = React.lazy(() =>
  import("./features/authentication/login-container")
);

const Main = React.lazy(() => import("./layouts/main"));

// const NotFound = React.lazy(() => import("./features/not-found"));
function Routes() {
  return (
    <Router>
      <React.Suspense fallback={<Spinner />}>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <PublicRoute restricted={false} path="/login" component={Login} />
          
          <PrivateRoute
            restricted={false}
            path="/"
            component={Main}
          />
         

          {/* <Route path="/" component={Main} /> */}

          <Redirect to="/404" />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default Routes;
