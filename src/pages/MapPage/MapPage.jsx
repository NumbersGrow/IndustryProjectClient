import "./MapPage.scss";

import { useState, useEffect, useRef} from "react";

import TopHeader from "../../components/Map/TopHeader/TopHeader";
import HeaderMobile from "../../components/Customer/HeaderMobile/HeaderMobile";
import MapSearch from "../../components/Map/MapSearch/MapSearch";
import Map from "../../components/Map/Map";
import StoreCard from "../../components/Map/StoreCard/StoreCard";

function MapPage() {
  const asideRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Focus the aside element when the component mounts
    asideRef.current.focus();
  }, []); // Empty dependency array ensures this effect runs only once on component mount
  const handleBlur = () => {
    setIsFocused(false);
    setIsVisible(false);
  };


  return (
    <section className="map">
        {isVisible && (
      <aside className="alert"
            onBlur={handleBlur}
            tabIndex={0} // Allow the element to receive focus
            ref={asideRef} // Assign the ref to the aside element

            >
        <div className="alert__box">
          <h1 className="alert__title">Allow "App" To Access Your Location? </h1>
          <p className="alert__text">
            Allowing access to your location will allow you to see store
            locations in your area
          </p>
          <div className="alert__links">
            <p className="alert__link">Allow Once</p>
            <p className="alert__link">Allow While Using App</p>
            <p className="alert__link">Don't Allow</p>
          </div>
        </div>
      </aside>
            )}
      <div className="map__wrapper"  >
      <header className="map-header">
        <TopHeader />
        <HeaderMobile linkText="EXIT" />
        <p className="map-header__title">
          {" "}
          Please select the store you are shopping at:
        </p>
        <MapSearch />
      </header>
      <section className="map-image">
        <Map />
        <p className="map-header__title store-title"> Store List</p>
        <StoreCard
          className="store-card"
          title="Summit at Birmigham"
          address="220 Summit Blvd Suite 170, Birmingham, AL 35243, United States"
        />
        <StoreCard
          className="store-card"
          title="Bridge Street"
          address="335 The Bridge St Unit 109, Huntsville, AL 35806 United States"
        />
        <StoreCard
          className="store-card"
          title="Lenox Square"
          address="3393 Peachtree Rd NE Unit 4024D, Atlanta, GA 30326, United States"
        />
        <StoreCard
          className="store-card"
          title="Perimeter Mall"
          address="2360-4400 Ashford Dunwoody Rd #2360, Atlanta, GA 30346, United States"
        />
      </section>
      </div>
      
    </section>
  );
}

export default MapPage;
