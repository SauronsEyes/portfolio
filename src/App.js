import Navbar from './components/Navbar';
import './App.css';
import InitialPage from './components/InitialPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UnityPortfolio from './components/UnityPortfolio';
import WebPortfolio from './components/WebPortfolio';
import LoadingScreen from "./components/LoadingScreen";
import PythonPortfolio from './components/PythonPortfolio';
import { useEffect } from "react";
import { useState } from "react";
import PhotographyPortfolio from './components/PhotographyPortfolio';
import MobilePortfolio from './components/MobilePortfolio';


function App() {
  const [loadingDisplay, setLoadingState] = useState(true);
  useEffect(() => {
    let loadingTimeout = setTimeout(() => {
      setLoadingState(false);

    }, 7000);

    return () => {
      clearTimeout(loadingTimeout)
    }
  }, [])
  return (
    <Router>
      <div className="App">
        <Navbar />
     
        {loadingDisplay && <LoadingScreen></LoadingScreen>}
        <Switch>
          <Route exact path="/">
            <InitialPage />
          </Route>
          <Route exact path="/unity">
            <UnityPortfolio />
          </Route>
          <Route exact path="/web">
            <WebPortfolio />
          </Route>
          <Route exact path="/python">
            <PythonPortfolio />
          </Route>
          <Route exact path="/photography">
            <PhotographyPortfolio />
          </Route>
          <Route exact path="/mobile">
            <MobilePortfolio/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
