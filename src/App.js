import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosComponent from "./components/AxiosComponent";
import ListComponent from "./components/ListComponent";
import AuthResultPage from "./pages/AuthResultPage";
import NewsPage from "./pages/NewsPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/list" exact>
          <ListComponent />
        </Route>
        <Route path="/axios" exact>
          <AxiosComponent />
        </Route>
        <Route path="/news" exact>
          <NewsPage />
        </Route>
        <Route path="/main" exact>
          <MainPage />
        </Route>
        <Route path="/authResult" exact>
          <AuthResultPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
