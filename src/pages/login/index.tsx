import { Button } from "../../components/Button";
import "./Login.css";
import kvlogin from "../../assets/kv-login.jpeg";
import kvlogo from "../../assets/kv-logo.png";
import { Input } from "../../components/Input";
import { useEffect, useRef, useState } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import useLocalStorage from "../../hooks/useLocalStorage";
import { redirect, useNavigate, useSearchParams } from "react-router-dom";

export const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let usernameref = useRef<HTMLInputElement>(null);
  let [showPwd, setShowPwd] = useLocalStorage("showpassword", "false");
  let [userAlert, setUserAlert] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    if (username.length > 10)
      setUserAlert("Username cannot be longer than 10 chars.");
    else setUserAlert("");
  }, [username]);
  useEffect(() => {
    if (usernameref.current) usernameref.current.focus();
  }, []);
  let mousePosition = useMousePosition();
  function usernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }
  function passwordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div className="login">
        <div className="left-div">
          <img src={kvlogin} className="left-img" />
        </div>
        <div className="right-div">
          <label>
            X: {mousePosition.x} Y: {mousePosition.y}
          </label>

          <div className="input-section">
            <img className="logo" src={kvlogo} />
            <button onClick={() => console.log(searchParams.get("hello"))}>
              Get
            </button>
            <button
              onClick={() => {
                let urlSearchParams = new URLSearchParams(
                  searchParams ? searchParams : undefined
                );
                urlSearchParams.delete("hello");
                urlSearchParams.set("hello", "world");
                setSearchParams(urlSearchParams);
              }}
            >
              Set
            </button>
            <form>
              <Input
                type="text"
                label="Username"
                id="username"
                value={username}
                onChange={usernameChange}
                ref={usernameref}
                endAdornment={
                  <button
                    disabled={username.length === 0}
                    type="button"
                    onClick={() => setUsername("")}
                  >
                    Clear
                  </button>
                }
              />
              <label>{userAlert}</label>
              <Input
                type={JSON.parse(showPwd) ? "text" : "password"}
                label="Password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={passwordChange}
              />
              <div>
                <input
                  type="checkbox"
                  id="storePwd"
                  checked={JSON.parse(showPwd)}
                  onChange={() => setShowPwd((!JSON.parse(showPwd)).toString())}
                />
                Show Password
              </div>

              <Button
                disabled={username.length === 0 || password.length === 0}
                text="Login"
                onClick={() => {
                  window.localStorage.setItem("isLoggedIn", "true");
                  navigate("/employees");
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
