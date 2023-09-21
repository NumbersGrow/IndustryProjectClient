import "./MobileThankYouPage.scss";

import TopHeader from "../../components/Map/TopHeader/TopHeader";
import HeaderMobile from "../../components/Customer/HeaderMobile/HeaderMobile";

import face from "../../assets/images/thank-you.jpg";
import footer from "../../assets/images/footer.png";

function MobileThankYouPage() {
  return (
    <section className="thank-you">
      <div className="thank-you__background">
        <header className="thank-you__header">
          <TopHeader />
          <HeaderMobile linkText="BACK" />
        </header>
        <section className="thank-you__box">
          <p className="thank-you__title"> THANK YOU</p>
          <div className="thank-you__image-wrapper">
            <img className="thank-you__image" src={face} alt="face-picture" />
          </div>
          <p className="thank-you__info">
            Please go to the pick up counter and show them the below
            confirmation number:
          </p>
          <p className="thank-you__info">4009786</p>
          <div className="thank-you__button-wrapper">
            <button className="thank-you__button">CONFIRM ORDER PICK UP</button>
          </div>
        </section>
        <section className="thank-you__footer">
          <img
            className="thank-you__footer-image"
            src={footer}
            alt="footer-bar"
          />
        </section>
      </div>
    </section>
  );
}

export default MobileThankYouPage;
