import "./MapPage.scss";

import TopHeader from "../../components/Map/TopHeader/TopHeader";
import HeaderMobile from "../../components/Customer/HeaderMobile/HeaderMobile";
import MapSearch from "../../components/Map/MapSearch/MapSearch";
// import Map from "../../components/Map/Map";
// import StoreCard from "../../components/Map/StoreCard/StoreCard";

function MapPage() {
  return (
    <section className="map">
      <header className="map-header">
        <TopHeader />
        <HeaderMobile linkText="EXIT" />
        <p> Please select the store you are shopping at:</p>
        <MapSearch />
      </header>
      {/* <main>
        <Map />
        <p> Store List</p>
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </main> */}
    </section>
  );
}

export default MapPage;
