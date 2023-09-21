import { useNavigate } from 'react-router-dom';
import "./HeaderMobile.scss";

function HeaderMobile({ linkText, onLinkClick }) {
    const navigate = useNavigate();

    const [word1, word2] = linkText.split(' ');

    const handleClick = () => {
        if (linkText === "CHANGE STORE") {
            navigate("/customer");
        } else if (linkText === "BACK") {
            onLinkClick();
        }
    }

    return (
        <section className="mobile-header">
            <h1 className="mobile-header__logo">LUSH</h1>
            <h4 onClick={handleClick}>
                {word1}<br />{word2}
            </h4>
        </section>
    );
};

export default HeaderMobile;
