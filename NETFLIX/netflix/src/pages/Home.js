import React from "react";
import ContainerRow from "../conponent/ContainerRow";
import Main from "../conponent/Main";
import requests from "../API";

function Home(props) {
  return (
    <div>
      <Main />
      <ContainerRow title="Trending " fetchURL={requests.getTrending} />
      <ContainerRow title="Popular" fetchURL={requests.getPopular} />
      <ContainerRow title="Up Coming" fetchURL={requests.getUpcomming} />
      <ContainerRow title="Now Playing" fetchURL={requests.getNowPlaying} />
    </div>
  );
}

export default Home;
