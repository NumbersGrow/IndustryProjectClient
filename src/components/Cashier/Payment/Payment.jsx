import './Payment.scss';


function Payment() {
    return (
        <section className="payment">
            <div className="payment__header">
                <h2 className="payment__title">Payment Method</h2>
            </div>

            <div className="payment__types">
                <button className="payment__type">Debit</button>
                <button className="payment__type">Credit</button>
                <button className="payment__type">Apple/Google Pay</button>
            </div>
            <button className="payment__button">Confirm</button>
        </section>
    )
}

export default Payment;