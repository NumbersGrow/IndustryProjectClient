import './Profile.scss';

import { ReactComponent as Persona } from "../../../assets/icons/persona.svg";


function Profile() {
    return (
        <section className="profile">
            <h2 className="profile__name">Mario</h2>
            <h3 className="profile__position">Cashier</h3>
            <Persona className="profile__pic" />
        </section>
    )
}

export default Profile;