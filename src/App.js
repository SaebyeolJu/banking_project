import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosComponent from "./components/AxiosComponent";
import ListComponent from "./components/ListComponent";
import AuthResultPage from "./pages/AuthResultPage";
import NewsPage from "./pages/NewsPage";
import MainPage from "./pages/MainPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <Router>
      <Switch>
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
        <Route path="/list" exact>
          <ListPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
