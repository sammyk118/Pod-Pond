import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import SavedPodcast from "./pages/SavedPodcast";
import SignUpPage from "./pages/SignUpPage";
import SpotifyPage from "./pages/SpotifyPage";
import SecSearchPage from "./pages/SecSearchPage";

function App() {
  const [userObject, setUserObject] = useState({
    loggedIn: false,
    token: ""
  });

  return (

    <Router>
      {userObject.loggedIn && <NavBar userObject={userObject} />}
      <Switch>
        <Route exact path="/" render={(props) => <SpotifyPage {...props} userObject={userObject} setUserObject={setUserObject} />} />
        <Route exact path={["/login", "/redirect"]} render={(props) => <LandingPage {...props} userObject={userObject} setUserObject={setUserObject} />}/>
        <Route exact path="/signup" render={(props) => <SignUpPage {...props} userObject={userObject} setUserObject={setUserObject} />} />
        {/* Routes above are NOT protected by authentication, routes below WILL be protected by authentication. */}
        <Route exact path="/search" render={(props) => <SearchPage {...props} userObject={userObject} setUserObject={setUserObject} />} />
        <Route exact path="/secsearch" render={(props) => <SecSearchPage {...props} userObject={userObject} setUserObject={setUserObject} />} />
        <Route exact path="/mypond" render={(props) => <SavedPodcast {...props} userObject={userObject} setUserObject={setUserObject} />}/>
        <Route exact path="*" render={(props) => <SpotifyPage {...props} userObject={userObject} setUserObject={setUserObject} />} />
      </Switch>
    </Router>
  );
}

export default App;
