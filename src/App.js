import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

import Sidebar from "react-sidebar";
import MaterialTitlePanel from "./components/SideBar/MaterialTitlePanel";
import SidebarContent from "./components/SideBar/SidebarContent";

import DashBoardPage from "./pages/DashBoardPage";
import CashierPage from "./pages/CashierPage";
import ListCustomerPage from "./pages/ListCustomerPage";
import DetailCustomerPage from "./pages/DetailCustomerPage";
import NotFound from "./pages/NotFound";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const mql = window.matchMedia(`(min-width: 800px)`);

const styles = {
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "white",
    padding: 8
  },
  sidebar: {
    zIndex: 3,
    position: "absolute",
    top: 0,
    bottom: 0,
    transition: "transform .3s ease-out",
    WebkitTransition: "-webkit-transform .3s ease-out",
    willChange: "transform",
    overflowY: "hidden"
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowX: "hidden",
    WebkitOverflowScrolling: "touch",
    transition: "left .3s ease-out, right .3s ease-out"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docked: mql.matches,
      open: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({ open });
  }

  mediaQueryChanged() {
    this.setState({
      docked: mql.matches,
      open: false
    });
  }

  toggleOpen(ev) {
    this.setState({ open: !this.state.open });

    if (ev) {
      ev.preventDefault();
    }
  }

  render() {
    const sidebar = <SidebarContent />;

    const toggleMenu = (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a onClick={this.toggleOpen} style={styles.contentHeaderMenuLink}>
        =
      </a>
    );
    const contentHeader = (
      <span>
        {!this.state.docked && toggleMenu}

        <a href="/" style={styles.contentHeaderMenuLink}>
          <span> Ever Face </span>
        </a>
      </span>
    );

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen,
      pullRight: true
    };

    return (
      <div className="App container h-100">
        <ToastContainer />
        <Router history={history}>
          <Sidebar
            {...sidebarProps}
            styles={{ sidebar: styles.sidebar, content: styles.content }}
          >
            <MaterialTitlePanel title={contentHeader}>
              <Switch>
                <Route exact path="/" component={DashBoardPage} />
                <Route path="/cashier" component={CashierPage} />
                <Route path="/customers" component={ListCustomerPage} />
                <Route
                  path="/detail_customers/:id"
                  component={DetailCustomerPage}
                />
                <Route path="*" component={NotFound} />
              </Switch>
            </MaterialTitlePanel>
          </Sidebar>
        </Router>
      </div>
    );
  }
}

export default App;
