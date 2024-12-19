// import React from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";

function Home() {
  return (
    <>
      <div className="w-full ~px-0/36">
        <div className="~px-0/16 text-justify">
          <div>
            <Header />
            <Main />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
