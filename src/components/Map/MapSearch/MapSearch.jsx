import "./MapSearch.scss";

function MapSearch() {
  return (
    <main className="map-search">
      <input
        type="search"
        className="map-search__input"
        id="search"
        placeholder="Input City/Postal Code"
      ></input>
    </main>
  );
}

export default MapSearch;
