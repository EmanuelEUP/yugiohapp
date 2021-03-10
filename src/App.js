import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import videobg from "./../src/assets/images/bg.mp4";
import videophoto from "./../src/assets/images/bg04.jpg";
import Header from "./components/Common/Header/Header.component";
import ProgressBar from "./components/Common/ProgressBar/ProgressBar.component";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackBoundary from "./../src/components/Common/ErrorFallbackBoundary/ErrorFallbackBoundary.component";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const CardsContextProvider = lazy(() => import("./context/CardsContext"));
const HomePage = lazy(() => import("./pages/Home/HomePage.component"));
const About = lazy(() => import("./pages/About/About.component"));
const Cards = lazy(() => import("./pages/Cards/Cards.component"));
const Page404 = lazy(() => import("./pages/Page404/Page404.component"));

const App = () => {
  return (
    <ErrorBoundary fallbackRender={ErrorFallbackBoundary}>
      <Suspense fallback={<ProgressBar></ProgressBar>}>
        <Fragment>
          <video autoPlay muted loop className="VIDEO01" poster={videophoto}>
            <source src={videobg} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <BrowserRouter>
                  <Header />

                  <Switch>
                    <Route exact path="/">
                      <HomePage />
                    </Route>

                    <Route path="/cards">
                      <CardsContextProvider>
                        <Cards />
                      </CardsContextProvider>
                    </Route>

                    <Route path="/about">
                      <About />
                    </Route>

                    <Route>
                      <Page404 />
                    </Route>
                  </Switch>
                </BrowserRouter>
              </div>
            </div>
          </div>
        </Fragment>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
