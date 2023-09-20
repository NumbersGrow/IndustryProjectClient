import './Payment.scss';


function Payment() {
    return (
        <section className="payment">
            <div className="payment__header">
                <h2 className="payment__title">Payment Method</h2>
            </div>

            <div className="payment__types">
                <button className="payment__type">Payment Type</button>
                <button className="payment__type">Payment Type</button>
                <button className="payment__type">Payment Type</button>
            </div>
            <button className="payment__button">Confirm</button>
        </section>
    )
}

export default Payment;