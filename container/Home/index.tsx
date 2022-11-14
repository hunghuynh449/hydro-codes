import React from "react";
import Header from "../Header";
import { HomeWrapper } from "./styled";

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Header />

      <main>
        <h1>Welcome to Hydro Codes</h1>

        <div className="baymax">
          <div className="head">
            <div className="eyes"></div>
          </div>
          <div className="body"></div>
          <div className="hand">
            <div className="finger"></div>
          </div>
        </div>
      </main>
    </HomeWrapper>
  );
};

export default Home;
