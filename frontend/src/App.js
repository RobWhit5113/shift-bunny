import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import SplashPage from './components/SplashPage'
import NewShiftForm from "./components/NewShiftForm/NewShiftForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/' exact>
            <SplashPage />
          </Route>
          <Route path='/home'>
            <HomePage />
          </Route>
          <Route path='/newShiftForm'>
            <NewShiftForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
