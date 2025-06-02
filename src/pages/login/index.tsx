import { Button } from "../../components/Button";
import "./Login.css";
import kvlogin from "../../assets/kv-login.jpeg";
import kvlogo from "../../assets/kv-logo.png";
import { Input } from "../../components/Input";
import { useEffect, useRef, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../api-services/auth/login.api";

export const Login = () => {
  const [login,{isLoading}] = useLoginMutation();
  let [error,setError]=useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let usernameref = useRef<HTMLInputElement>(null);
  let [showPwd, setShowPwd] = useLocalStorage("showpassword", "false");
  let [userAlert, setUserAlert] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    if (username.length > 20)
      setUserAlert("Username cannot be longer than 20 chars.");
    else setUserAlert("");
  }, [username]);
  useEffect(() => {
    if (usernameref.current) usernameref.current.focus();
  }, []);
  function usernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }
  function passwordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  const onLogin = async () => {
     login({email:username,password:password}).unwrap()
     .then((response)=>{
        window.localStorage.setItem("token", response.accessToken);
         navigate("/employees");
     }).catch((error)=>{
      setError(error.data.message)
     })
    
   
  };

  return (
    <>
      <title>Login</title>
      <div className="login">
        <div className="left-div">
          <img src={kvlogin} className="left-img" />
        </div>
        <div className="right-div">
          <div className="input-section">
            <img className="logo" src={kvlogo} />

            <div className="form-full">
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
              <label>{error}</label>
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
                disabled={username.length === 0 || password.length === 0 || isLoading}
                // disabled={isLoading()}
                text="Login" 
                onClick={onLogin}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
