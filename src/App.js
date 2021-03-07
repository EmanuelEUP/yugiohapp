import React, { Fragment, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import videobg from "./../src/assets/images/bg.mp4";
import videophoto from "./../src/assets/images/bg04.jpg";
import Header from "./components/Common/Header/Header.component";
import CardsContextProvider from "./context/CardsContext";
import { ErrorBoundary } from "react-error-boundary";
import ProgressBar from "./components/Common/ProgressBar/ProgressBar.component";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//const HomePage = lazy(() => import("./pages/Home/HomePage.component"));
import HomePage from "./pages/Home/HomePage.component";
//const About = lazy(() => import("./pages/About/About.component"));
import About from "./pages/About/About.component";
//const Cards = lazy(() => import("./pages/Cards/Cards.component"));
import Cards from "./pages/Cards/Cards.component";
import Page404 from "./pages/Page404/Page404.component";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const App = () => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}
  >
    <Fragment>
      <video autoPlay muted loop className="VIDEO01" poster={videophoto}>
        <source src={videobg} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <BrowserRouter>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Switch>
                <Route path="/" exact>
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

                <Route path="*">
                  <Page404 />
                </Route>

                <Route path="">
                  <Page404 />
                </Route>

                <Route>
                  <Page404 />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Fragment>
  </ErrorBoundary>
);

export default App;
