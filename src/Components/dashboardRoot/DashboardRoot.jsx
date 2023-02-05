import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavDashboard from "./NavDashboard";
import NavlinkDashboard from "./NavlinkDashboard";

import "./dashboardRoot.css";

function DashboardRoot() {
  useEffect(() => {
    let elements = document.querySelectorAll(".dashboard nav ul .lli");

    elements.forEach((ele) => {
      ele.addEventListener("click", (e) => {
        if (ele.classList.contains("active")) {
          elements.forEach((b) => {
            b.classList.remove("active");
          });
        } else {
          elements.forEach((b) => {
            b.classList.remove("active");
          });
          ele.classList.add("active");
        }
      });
    });
  });

  return (
    <div className="dashboard">
      <NavlinkDashboard />
      <div className="content">
        {/* <div className="bar flex-between">
          <span className="material-icons-outlined menu rad-10">menu</span>
          <p>rate us in marouf to take a free month</p>
          <span className="material-icons-outlined">close</span>
        </div> */}
        <NavDashboard />
        <div className="outlet-dashboard">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardRoot;
