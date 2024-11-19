// import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";

function Home() {
  return (
    <>
      <div className="w-full ~px-0/36">
        <div className="~px-4/16 h-full bg-custom-black text-justify">
          <div>
            <Header/>
            <Main/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
