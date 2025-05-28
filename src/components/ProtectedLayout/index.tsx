import React from "react";
import "./layout.css";
import kvlogo from "../../assets/kv-logo.png";
import icon from "../../assets/icon.svg";
import { Navigate, Outlet } from "react-router-dom";
export const ProtectedLayout = ({
  children,
}: //   sidebar_title
{
  children?: React.ReactNode;
  //   sidebar_title: string;
}) => {
  function isLoggedIn() {
    const token = window.localStorage.getItem("isLoggedIn");
    return token === "true";
  }
  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }

  return (
    <main>
      <header className="main-header"></header>
      <aside>
        <a href="https://keyvalue.systems">
          <img className="logo" src={kvlogo} />
        </a>
        <div className="bluebox">
          <img src={icon} />
          Employees List
        </div>
      </aside>
      <section>
        <Outlet />
        {children}
      </section>
    </main>
  );
};
