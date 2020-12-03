import React, { useEffect } from "react";

const HomePage = () => {
  //fetch the api data here
  useEffect(() => {
    document.title = "cyberart_by_justin";
  },[]);

  return (
    <main className="container" id="home-page">
        <h1 className="container__title">Welcome to the cyber art gallery!</h1>
    </main>
  );
};

export default HomePage;
