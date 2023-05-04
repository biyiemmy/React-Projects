import {} from "react";
import { NavLink, Outlet } from "react-router-dom";

export const HostLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="/host"
          end
          className={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Reviews
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
