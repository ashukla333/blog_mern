"use client";
import React, { useState } from "react";
import LoginPage from "./AuthComponents/LoginPage";
import ForgotPass from "./AuthComponents/ForgotPass";
import ResetPass from "./AuthComponents/ResetPass";

const AuthPage = () => {
  const [authType, setAuthType] = useState("login");
  return (
    <div className="grid place-content-center items-center h-screen w-full overflow-hidden  justify-center ">
      {authType == "login" ? (
        <LoginPage setAuthType={setAuthType} />
      ) : authType == "forgot password" ? (
        <ForgotPass setAuthType={setAuthType} />
      ) : (
        authType == "reset password" && <ResetPass />
      )}
    </div>
  );
};

export default AuthPage;
