import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosComponent from "./components/AxiosComponent";
import ListComponent from "./components/ListComponent";
import NewsPage from "./pages/NewsPage";

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
        <NewsPage />
      </Switch>
    </Router>
  );
}

export default App;
