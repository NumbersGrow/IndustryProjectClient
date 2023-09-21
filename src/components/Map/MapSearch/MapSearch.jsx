import "./MapSearch.scss";

function MapSearch() {
  return (
    <section className="map-search">
      <input
        type="search"
        className="map-search__input"
        id="search"
        placeholder="Input City/Postal Code"
      ></input>
    </section>
  );
}

export default MapSearch;
