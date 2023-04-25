//importing important components and libraries
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import React, { useState, Suspense } from "react";
import { Icon } from "@iconify/react";

const Landing = React.lazy(() => import("./Landing"));
const Register = React.lazy(() => import("./Register"));
const Application = React.lazy(() => import("./Application"));

//the main component to support single page application method
const Main = () => {
  //state variables with react hooks
  //the currentPage state variable changed based on the page paths
  const [currentPage, setCurrentPage] = useState(
    window.location.href.includes("/landing")
      ? "/landing"
      : window.location.href.includes("/register")
      ? "/register"
      : "/application"
  );

  //the variable stores data when a form is submitted
  const [onSubmit, setOnSubmit] = useState(false);

  //rendering the jsx element
  return (
    <div className="main">
      <div className="bg-slate-50 text-sm lg:text-base xl:text-xl font-roboto">
        <div className="flex flex-col max-w-screen min-h-screen justify-between">
          <header>
            {/* the navbar reusable component */}
            <Navbar page={currentPage} setCurrentPage={setCurrentPage} />
          </header>

          <main>
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
              {/* the component based on the currentPage state variable value
              dynamically */}
              {currentPage == "/landing" ? (
                <Landing setCurrentPage={setCurrentPage} />
              ) : currentPage == "/register" ? (
                <Register
                  setCurrentPage={setCurrentPage}
                  onSubmit={onSubmit}
                  setOnSubmit={setOnSubmit}
                />
              ) : (
                <Application
                  setCurrentPage={setCurrentPage}
                  onSubmit={onSubmit}
                />
              )}
            </Suspense>
          </main>

          <footer>
            {/* the footer component as a reusable component */}
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Main;
