import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "../pages/Main";
const IndexRoute = () => {
  return (
    <Router>
      <Route path="/" exact>
        <Main />
      </Route>
    </Router>
  );
};

export default IndexRoute;
