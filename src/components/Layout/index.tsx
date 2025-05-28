import React from "react";
import "./layout.css";
import kvlogo from "../../assets/kv-logo.png";
import icon from "../../assets/icon.svg";
import { Outlet } from "react-router-dom";
export const Layout = ({
  children,
//   sidebar_title
}: {
  children?: React.ReactNode;
//   sidebar_title: string;
}) => {
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
        <Outlet/>
        {children}
      </section>
    </main>
  );
};
