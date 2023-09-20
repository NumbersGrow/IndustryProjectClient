import './Profile.scss';

function Profile() {
    return (
        <section className="profile">
            <h2 className="profile__name">Jane D</h2>
            <h3 className="profile__position">Cashier</h3>
            <img className="profile__pic" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="placeholder profile" />
        </section>
    )
}

export default Profile;