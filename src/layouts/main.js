import React, { Suspense } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import appRoutes from "../features/route-list";
import { Redirect, Route, Switch } from "react-router-dom";
import ModalBox from "../components/Modals/ModalBox";
import SpinnerDialogue from "../components/Spinner/spinner-dialogue";
function Main() {
  return (
  
      <div class="">
        <div class="">
          <Sidebar
            content={
              <div className=" bg-white">
                <Suspense
                  fallback={
                    <ModalBox content={<SpinnerDialogue />} open={true} />
                  }
                >
                  <Switch>
                    {appRoutes.map((route, idx) => {
                      return (
                        route.component && (
                          <Route
                            key={idx}
                            path={route.path}
                            exact
                            name={route.name}
                            render={(props) => <route.component {...props} />}
                          />
                        )
                      );
                    })}
                    <Redirect from="/" to="/dashboard" />
                  </Switch>
                </Suspense>
              </div>
            }
          />
        </div>
      </div>
    
  );
}

export default Main;
