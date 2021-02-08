import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import routes from "./routes";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Switch>
          {routes.map(link => (
            <Route path={link.path} component={link.component} exact={link.exact} />
          ))}
        </Switch>
      </Router>
      <ToastContainer />
    </>
  )
}

export default AppRoutes;