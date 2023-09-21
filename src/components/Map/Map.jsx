import "./Map.scss";

import zoom from "../../assets/icons/zoom.svg";
import marker from "../../assets/icons/marker.png";
import google from "../../assets/icons/Google.svg";
import dot from "../../assets/icons/Ellipse.svg";

function Map() {
  return (
    <section className="map">
      <div className="map__background">
        <div className="map__top">
          <div className="map__view">
            <div className="map__view-wrapper">
            <p className="map__view-left">Map</p>
            </div>
            <p className="map__view-right">Satellite</p>
          </div>
          <div className="map__zoom">
            <img className="map__zoom-img" src={zoom} alt="zoom" />
          </div>
        </div>
        <div className="map__center">
          <img className="map__center-img" src={marker} alt="marker" />
          <img className="map__center-dot" src={dot} alt="dot" />
        </div>
        <div className="map__bottom">
          <img className="map__bottom-google" src={google} alt="google-logo" />
          <div className="map__bottom-context">
            <p className="map__context">Map data @2019 Google</p>
            <p className="map__context">Term of Use</p>
            <p className="map__context">Report a map error</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
