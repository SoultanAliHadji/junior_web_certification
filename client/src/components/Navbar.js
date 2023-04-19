//importing important libraries
import { Icon } from "@iconify/react";
import { useState } from "react";

//the navbar reusable component that will be exported
export const Navbar = (props) => {
  //react hooks for triggering onHover dropdown on account nav
  const [accountNav, setAccountNav] = useState(false);

  //rendering the jsx element
  return (
    <div className="navbar shadow-md fixed z-50 w-full bg-slate-50">
      <div className="container mx-auto xl:px-20 py-4 grid grid-flow-col items-center">
        {/* navbar brand */}
        <label
          className="text-lg lg:text-xl xl:text-3xl text-blue-600 font-semibold hover:cursor-pointer font-yeseva"
          onClick={() => {
            //onClick events that will pass values to the main component
            window.history.replaceState(null, null, "/landing");
            props.setCurrentPage("/landing");
          }}
        >
          BeasiswaPintar
        </label>

        {/* navbar nav menus with a map loop */}
        <div className="flex justify-end items-center gap-10">
          {[
            { id: 1, name: "Halaman Utama", path: "/landing" },
            { id: 2, name: "Daftar", path: "/register" },
            { id: 3, name: "Hasil", path: "/application" },
          ].map((menu) => {
            return (
              <nav
                key={menu.id}
                className={
                  (props.page == menu.path
                    ? "font-medium text-blue-600 pointer-events-none"
                    : "hover:cursor-pointer hover:text-blue-600") +
                  (menu.path == "/landing" ? " hidden md:flex" : "")
                }
                onClick={() => {
                  //onClick events that will pass values to the main component
                  window.history.replaceState(null, null, process.env.REACT_APP_MAINURL + menu.path);
                  props.setCurrentPage(menu.path);
                }}
              >
                {menu.name}
              </nav>
            );
          })}
          <div
            onMouseEnter={() => {
              setAccountNav(true);
            }}
            onMouseLeave={() => {
              setAccountNav(false);
            }}
          >
            <nav
              className={
                "flex items-center hover:cursor-pointer" +
                (accountNav == true ? " text-blue-600" : "")
              }
            >
              <Icon
                className="text-2xl xl:text-4xl"
                icon="material-symbols:account-circle"
              />
              <Icon
                className="text-lg xl:text-2xl -ms-1"
                icon="material-symbols:arrow-drop-down"
              />
            </nav>
            <div
              className={
                "absolute -ms-20 pt-4 text-lg" +
                (accountNav == false ? " hidden" : "")
              }
            >
              <div className="grid border-2 bg-slate-50 pt-1 rounded-b-md">
                <button className="text-xl px-4 py-2 cursor-default pointer-event-none">
                  {localStorage.getItem("User")}
                </button>
                <hr />
                <button className="px-4 py-2 hover:bg-blue-600 hover:text-white text-start flex items-center gap-2">
                  <Icon className="text-xl" icon="uil:setting" />
                  <label className="cursor-pointer">Pengaturan Akun</label>
                </button>
                <hr />
                <button
                  className="px-4 py-2 hover:bg-red-600 hover:text-white text-start flex items-center gap-2"
                  onClick={() => {
                    localStorage.removeItem("User");
                    window.location.assign(process.env.REACT_APP_MAINURL);
                  }}
                >
                  <Icon className="text-xl" icon="mdi:logout-variant" />
                  <label className="cursor-pointer">Logout</label>
                </button>
                <hr />
                <div className="flex justify-center">
                  <Icon icon="fluent:line-horizontal-1-20-filled" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
