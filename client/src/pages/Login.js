//importing important components and libraries
import "../App";
import { useState, useEffect, Suspense } from "react";
import { Icon } from "@iconify/react";

const Login = () => {
  const [notif, setNotif] = useState("");

  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  const handleLogin = () => {
    if (
      document.getElementById("username").value == "" ||
      document.getElementById("password").value == ""
    ) {
      setNotif("*Pastikan anda mengisi semua data");
    } else {
      localStorage.setItem("user", document.getElementById("username").value);
      window.location.assign(
          !window.location.href.includes("/landing") && !window.location.href.includes("/register") && !window.location.href.includes("/application") ? process.env.REACT_APP_MAINURL + "/landing" : window.location.href
      );
      window.location.reload();
    }
  };

  return (
    <div className="login">
      <Suspense
        fallback={
          <div className="flex justify-center items-center gap-2">
            <Icon
              className="animate-spin text-blue-600 text-xl"
              icon="icomoon-free:spinner9"
            />
            <label>Loading...</label>
          </div>
        }
      >
        <div className="main bg-slate-50 text-sm lg:text-base xl:text-xl font-roboto">
          <div className="w-screen h-screen flex justify-center items-center">
            <div className="border border-blue-600 rounded-xl p-10 w-[28%]">
              <div className="flex justify-center mb-12">
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-medium">
                  Log-in
                </h3>
              </div>
              <form className="grid gap-8">
                <div className="username grid">
                  <label>Username</label>
                  <input
                    className="border border-neutral-600 outline-blue-600 px-2 py-1"
                    id="username"
                    type="text"
                  />
                </div>
                <div className="password grid">
                  <label>Password</label>
                  <input
                    className="border border-neutral-600 outline-blue-600 px-2 py-1"
                    id="password"
                    type="password"
                  />
                </div>
              </form>
              {notif != "" ? (
                <div className="flex mt-6 text-sm xl:text-base text-red-500">
                  <label>{notif}</label>
                </div>
              ) : (
                ""
              )}
              <div className="flex justify-center mt-10">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white text-base lg:text-lg xl:text-2xl font-medium rounded-lg px-4 py-1"
                  onClick={() => {
                    handleLogin();
                  }}
                >
                  Masuk
                </button>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Login;
