import "./MapPage.scss";

import TopHeader from "../../components/Map/TopHeader/TopHeader";
import HeaderMobile from "../../components/Customer/HeaderMobile/HeaderMobile";
import MapSearch from "../../components/Map/MapSearch/MapSearch";
import Map from "../../components/Map/Map";
import StoreCard from "../../components/Map/StoreCard/StoreCard";

function MapPage() {
  return (
    <section className="map">
      <header className="map-header">
        <TopHeader />
        <HeaderMobile linkText="EXIT" />
        <p className="map-header__title"> Please select the store you are shopping at:</p>
        <MapSearch />
      </header>
      <section className="map-image">
        <Map />
        <p className="map-header__title store-title"> Store List</p>
        <StoreCard className="store-card" title="Summit at Birmigham" address="220 Summit Blvd Suite 170, Birmingham, AL 35243, United States"/>
        <StoreCard className="store-card" title="Bridge Street" address="335 The Bridge St Unit 109, Huntsville, AL 35806 United States"/>
        <StoreCard className="store-card" title="Lenox Square" address="3393 Peachtree Rd NE Unit 4024D, Atlanta, GA 30326, United States"/>
        <StoreCard className="store-card" title="Perimeter Mall" address="2360-4400 Ashford Dunwoody Rd #2360, Atlanta, GA 30346, United States"/>
      </section>
    </section>
  );
}

export default MapPage;
