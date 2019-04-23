import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./MaterialTitlePanel";
import { Link } from "react-router-dom";

const styles = {
  sidebar: {
    width: 256,
    height: "100%"
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "#757575",
    textDecoration: "none"
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575"
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "white"
  }
};

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <Link to="/" style={styles.sidebarLink}>
          Lễ Tân
        </Link>
        <Link to="/cashier" style={styles.sidebarLink}>
          Thu Ngân
        </Link>
        <Link to="/customers" style={styles.sidebarLink}>
          Quản lý Khách hàng
        </Link>
        <Link to="/detail_customers" style={styles.sidebarLink}>
          Chi tiết Khách hàng
        </Link>
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;
