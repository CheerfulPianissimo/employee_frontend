import React, { Suspense } from "react";
import "./layout.css";
import kvlogo from "../../assets/kv-logo.png";
import icon from "../../assets/icon.svg";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
export const ProtectedLayout = ({
  children,
}: //   sidebar_title
{
  children?: React.ReactNode;
  //   sidebar_title: string;
}) => {
  function isLoggedIn() {
    const token = window.localStorage.getItem("token");
    return !(token === undefined);
  }
  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }
  let navigate = useNavigate();
  return (
    <main>
      <header className="main-header"></header>
      <aside>
        <a href="/">
          <img className="logo" src={kvlogo} />
        </a>
        <div className="bluebox" onClick={()=>navigate('/employees/list')}>
          <img src={icon} />
          Employees List
        </div>
      </aside>
      <section>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>

        {children}
      </section>
    </main>
  );
};
