import React, { Component } from "react";
import NavBar from "./components/navBar";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoardPage from "./pages/DashBoardPage";
import CashierPage from "./pages/CashierPage";
import ListCustomerPage from "./pages/ListCustomerPage";
import DetailCustomerPage from "./pages/DetailCustomerPage";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToastContainer />
        <NavBar />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={DashBoardPage} />
              <Route path="/cashier" component={CashierPage} />
              <Route path="/customers" component={ListCustomerPage} />
              <Route path="/detail_customers" component={DetailCustomerPage} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
