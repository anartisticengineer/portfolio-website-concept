import React, { useEffect } from "react";

const HomePage = () => {
  //fetch the api data here
  useEffect(() => {
    document.title = "cyberart_by_justin";
  });

  return (
    <main className="container" id="home-page">
        <h1 className="container__title">Welcome to the cyber art gallery!</h1>
    </main>
  );
};

export default HomePage;
//separate component for the posts
const RecentPost = () => {
  return (
    <span>
      <h2>Recent Posts</h2>
    </span>
  );
};

const Shop = () => {
  return (
    <div>
      <h2>Shop</h2>
      <script
        type="text/javascript"
        src={"https://www.redbubble.com/assets/external_portfolio.js"}
      ></script>
      <script id="rb-xzfcxvzx" type="text/javascript">
        new RBExternalPortfolio('www.redbubble.com', 'justin-cyberart', 2,
        2).renderIframe();
      </script>
    </div>
  );
};
