import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const styleTitle = {
  fontStyle: "italic",
};

const NavBar = () => (
  <header className="navBar">
    <div className="navBarTitle" style={styleTitle}>
      Quản lý dự án
    </div>

    <div className="navbarItem navBarLink">
      <Link to="/project">Project</Link>
    </div>
    
    <div className="navbarItem navBarLink">
      <Link to="/congViec">Công việc</Link>
    </div>
    <div className="navbarItem navBarLink">
      <Link to="/nhanVien">Nhân viên</Link>
    </div>
  </header>
);

export default NavBar;
