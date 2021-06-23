import React from "react";
import Header from "../components/includes/Header";
import axios from "axios";
import Link from "next/link";
const Radio = ({ radioData }) => {
  return (
    <>
      <Header>
        <h3 className="main__layout-header-text">Get the best Radio</h3>
        <div className="song__main-header">
          <img
            src={radioData[0].picture_medium}
            className="song__main-header-image"
          />
          <div className="song__main-texts">
            <h4 className="song__main-texts-h4">{radioData[0].title}</h4>
            <h5 className="song__main-texts-h2">{radioData[0].description}</h5>
            <Link href="https://www.deezer.com/show/2268472">
              <button className="song__main-texts-button">PLAY</button>
            </Link>
          </div>
        </div>
      </Header>
      <main className="main__layout-main">
        <div className="main__layout-main-top-music">
          <h3 className="main__layout-main-top-music-title">Top Podcast</h3>
          <div className="main__layout-main-top-container-grid">
            {radioData.slice(1, radioData.length).map((data) => (
              <div className="main__layout-main-top-album-card">
                <img
                  className="main__layout-main-top-album-card-image"
                  src={data.picture_medium}
                />
                <h3 className="main__layout-main-top-album-card-title">
                  {data.title}
                </h3>
                <h4 className="main__layout-main-top-album-card-artist-title">
                  {data.description}
                </h4>
                <h5 className="main__layout-main-top-album-card-year"></h5>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const options = {
    method: "GET",
    url: "https://api.deezer.com/radio/top",
    headers: {
      "x-rapidapi-key": "f96d3895f5msha2b8b703677b70ep1418a5jsn25b4d8e370f3",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  const radioData = await response.data;
  return { props: { radioData: radioData.data } };
}

export default Radio;
