// import "./uncontrolled.css";
import { useRef, useEffect } from "react";
import kvLogo from "../../assets/kv-logo.png";
import kvLoginImg from "../../assets/kv-login.jpeg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const clearRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
    textOnChange();
  }, []);
  const clearUsername = () => {
    if (!usernameRef.current) return;
    usernameRef.current.value = "";
    if (!clearRef.current) return;
    clearRef.current.disabled = true;
  };

  const textOnChange = () => {
    if (!usernameRef.current) return;
    if (!clearRef.current) return;

    if (usernameRef.current.value.length > 0) {
      clearRef.current.disabled = false;
    } else {
      clearRef.current.disabled = true;
    }
  };
  return (
    <div className="content">
      <div className="pattern-side">
        <div className="pattern" />
        <div className="circle-large">
          <div className="circle-inner">
            <img src={kvLoginImg} alt="KV Login" className="login-image" />
          </div>
        </div>
      </div>
      <div className="login-side">
        <div className="login-content">
          <img className="logo" src={kvLogo} alt="KV Logo" />
          <form>
            <Input
              id="login-username-input"
              type="text"
              label="Username"
              ref={usernameRef}
              onChange={textOnChange}
              endAdornment={
                <button type="button" onClick={clearUsername} ref={clearRef}>
                  Clear
                </button>
              }
            />

            <Input type="password" id="login-password-input" label="Password" />

            <Button text="Log In" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;
