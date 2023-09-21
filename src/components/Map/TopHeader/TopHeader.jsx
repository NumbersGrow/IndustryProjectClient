import "./TopHeader.scss";

import connection from "../../../assets/icons/reception.svg";
import wifi from "../../../assets/icons/wifi.svg";
import battery from "../../../assets/icons/_battery.svg";

function TopHeader() {
  return (
    <main className="top-header">
      <p>19:02</p>
      <section className="top-header__images">
        <img src={connection} className="top-header__image" alt="connection" />
        <img src={wifi} className="top-header__image" alt="wifi" />
        <img src={battery} className="top-header__image" alt="battery" />
      </section>
    </main>
  );
}

export default TopHeader;
